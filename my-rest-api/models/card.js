const Joi = require("joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  cardImage: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },
  cardNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 99999999999,
    unique: true,
  },
  cardsFavorites: Array,

  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Card = mongoose.model("Card", cardSchema);

function validateCard(card) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1024).required(),
    cardImage: Joi.string().min(11).max(1024),
  });

  return schema.validate(card);
}

async function generateBizNumber(Card) {
  while (true) {
    let randomNumber = _.random(1000, 999999);
    let card = await Card.findOne({ cardNumber: randomNumber });
    if (!card) return String(randomNumber);
  }
}

// function validateFavorite(data) {
//   const schema = Joi.object({
//     favorites: Joi.array().min(1).required(),
//   });

//   return schema.validate(data);
// }

exports.Card = Card;
exports.validateCard = validateCard;
exports.generateBizNumber = generateBizNumber;
// exports.validateFavorite = validateFavorite;
