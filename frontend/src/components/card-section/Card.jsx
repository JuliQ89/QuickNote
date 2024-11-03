import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="toolCard">
      <div className="toolCardIcon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
