// import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export default function MyCard({ card }) {
  return (
    <div className='card'>
      <img src={card.cardImage} className='cardImg' alt={card.title} />
      <div className='cardInfo'>
        <h5 className='cardTitle'>{card.title}</h5>
        <hr />
        <p className='cardDesc'>
          {card.description}
          <hr />
        </p>

        <div className='cardIcons'>
          <Link to={`/my-cards/edit/${card._id}`}>
            <i className='singlePostIcon bi bi-pencil'></i>
          </Link>
          <Link className='p-2' to={`/my-cards/delete/${card._id}`}>
            <i className='singlePostIcon bi bi-trash'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
