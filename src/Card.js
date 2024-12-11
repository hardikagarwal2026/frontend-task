import React from "react";
import "./App.css";
const Card = ({ image, pillText, title, description }) => {
  return (
    <div className="card">
      <div className="card-row card-row-1">
        <img src={image} alt="card-1" className="card-image" />
        <div className="pill">
          <p className="pill-text">{pillText}</p>
        </div>
      </div>
      <div className="card-row card-row-2">
        <h1 className="card-text-h">{title}</h1>
        <p className="card-text-p">{title}</p>
      </div>
    </div>
  );
};

export default Card;
