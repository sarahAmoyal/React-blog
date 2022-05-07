import "../../styles/card.css";

export default function Card({ card, addToFavorite, favoriteCards }) {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  function removeFromFavorites(cardId) {
    let favoritesAfterRemoveCard = favoriteCards.filter(
      (card) => card._id !== cardId
    );
    localStorage.setItem("favorites", JSON.stringify(favoritesAfterRemoveCard));
    window.location.reload(false);
  }

  function isFav(cardId) {
    return favorites && favorites.some((c) => c._id === cardId);
  }

  return (
    <div className='card'>
      <img src={card.cardImage} className='cardImg' alt={card.title} />
      <div className='cardInfo'>
        <h5 className='cardTitle'>{card.title}</h5>
        <hr />
        <p className='cardDesc'>
          {card.description}
          <span className='cardIcons'>
            <i
              onClick={() =>
                addToFavorite
                  ? addToFavorite(card)
                  : removeFromFavorites(card._id)
              }
              className={`singlePostIcon bi ${
                isFav(card._id) ? "bi-heart-fill" : "bi bi-heart"
              }`}
            ></i>
          </span>
        </p>

        {/* {user.id === card._id && (
          
          <div className='cardIcons'>
            <Link to={`/my-cards/edit/${card._id}`}>
              <i className='singlePostIcon bi bi-pencil'></i>
            </Link>
            <Link className='p-2' to={`/my-cards/delete/${card._id}`}>
              <i className='singlePostIcon bi bi-trash'></i>
            </Link>
           
          </div>
        )} */}
      </div>
    </div>
  );
}
