const express = require("express");
const _ = require("lodash");
const { Card, validateCard, generateBizNumber } = require("../models/card");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  let cards;
  cards = await Card.find();
  res.status(200).send(cards);
});

router.get("/my-cards", auth, async (req, res) => {
  if (!req.user) return res.status(401).send("Access Denied");
  const cards = await Card.find({ user_id: req.user._id });
  res.send(cards);
});

const getFavorites = (cardsFavorites) => {
  const favoritesCards = Card.find({
    cardNumber: { $in: cardsFavorites },
  });
  return favoritesCards;
};

router.get("/my-favorite", auth, async (req, res) => {
  if (!req.user) return res.status(401).send("Access Denied");
  let data = {};
  data.cards = req.query.cardNumber.split(",");
  const favoritesCards = await getFavorites(data.favoritesCards);
  res.send(favoritesCards);
});

router.delete("/:id", auth, async (req, res) => {
  const card = await Card.findOneAndRemove({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!card)
    return res.status(404).send("The card with the given ID was not found.");
  res.send(card);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let card = await Card.findOneAndUpdate(
    { _id: req.params.id, user_id: req.user._id },
    req.body
  );
  if (!card)
    return res.status(404).send("The card with the given ID was not found.");

  card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
  res.send(card);
});

router.get("/:id", auth, async (req, res) => {
  const card = await Card.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!card)
    return res.status(404).send("The card with the given ID was not found.");
  res.send(card);
});

// router.get("/", auth, async (req, res) => {
//   // if (!req.user) return res.status(401).send("Access Denied");
//   const cards = await Card.find({});

//   res.send(cards);
// });
// router.get("/", async (req, res) => {
//   if (!req.user) return res.status(401).send("Access Denied");
//   const cards = await Card.find({});
//   res.send(cards);
// });

router.post("/", auth, async (req, res) => {
  const { error } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let card = new Card({
    title: req.body.title,
    description: req.body.description,
    cardImage: req.body.cardImage
      ? req.body.cardImage
      : "https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cardNumber: await generateBizNumber(Card),
    user_id: req.user._id,
    // cardFavorite: [],
  });

  post = await card.save();
  res.send(post);
});

module.exports = router;
