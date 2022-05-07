import React from "react";
import Card from "./common/card";
import "../styles/myFavorite.css";

class MyFavorite extends React.Component {
  state = {
    cards: JSON.parse(localStorage.getItem("favorites") || "0"),
  };

  async componentDidMount() {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "0");
    if (favorites.length > 0) this.setState({ cards: favorites });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className=''>
        <div className='myFevCards'>
          {cards.length > 0 ? (
            cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                favoriteCards={this.state.cards}
              />
            ))
          ) : (
            <div>
              <h1 className='favoritesHeading'>There are no Favorites card</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MyFavorite;
