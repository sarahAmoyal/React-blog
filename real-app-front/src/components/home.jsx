import "../styles/home.css";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import AllCards from "./allCards";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const res = await axios.get("/cards");

      setCards(res.data);
    };
    fetchCards();
  }, []);

  return (
    <>
      <Header />

      <div className='home'>
        <AllCards cards={cards} />

        <Sidebar />
      </div>
    </>
  );
}
