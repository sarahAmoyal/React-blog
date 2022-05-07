import React from "react";
import cardService from "../services/cardService";
import MyCard from "../components/common/myCard ";
import "../styles/myCards.css";

class MyCards extends React.Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();

    if (data.length > 0) this.setState({ cards: data });
    console.log(data);
  }

  render() {
    const { cards } = this.state;

    return (
      <div className=''>
        <h1 className='headingMyCards'>My Cards</h1>
        <div className='myCards'>
          {cards.length > 0 &&
            cards.map((card) => <MyCard key={card._id} card={card} />)}
        </div>
      </div>
    );
  }
}

export default MyCards;
