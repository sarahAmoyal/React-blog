import Card from "./common/card";
import "../styles/allCards.css";
import { useState } from "react";

export default function AllCards({ cards }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || '[]')
  );

  const addToFavorite = (card) => {
    let addCard = true;
    let arrayFav = favorites;

    arrayFav.map((item, key) => {
      if (item._id === card._id) {
        arrayFav.splice(key, 1);
        addCard = false;
      }
    });

    if (addCard) {
      card.favorite = true;
      arrayFav.push(card);
    }
    setFavorites([...arrayFav]);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className='container'>
      <input
        className='searchInput'
        type='text'
        placeholder='Search For A Dish'
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className='myCards'>
        {cards
          .filter((card) => {
            if (searchTerm === "") {
              return card;
            } else if (
              card.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return card;
            }
          })
          .map((card) => (
            <Card card={card} addToFavorite={addToFavorite} />
          ))}
      </div>
    </div>
  );
}
