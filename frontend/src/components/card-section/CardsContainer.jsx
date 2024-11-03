import React from "react";
import Card from "./Card";

import { FaRegNoteSticky } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";

const cardsContent = [
  {
    icon: <FaRegNoteSticky />,
    title: "Notes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <FaRegClock />,
    title: "Timing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "Planning",
    description:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    icon: <FaHouseUser />,
    title: "User friendly",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
  },
];

const CardsContainer = () => {
  return (
    <div className="toolCardsWrapper">
      <div className="toolCardsHeader">
        <h1>More than just a tool</h1>
        <p>Entdecken Sie auf dieser Seite, was Sie tun können</p>
      </div>
      <div className="toolCardsContainer">
        {cardsContent.map((card, i) => (
          <Card
            key={i}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
