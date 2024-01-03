import React from "react";
import { Card } from "../Card/Card";
import "./Cards.css";
function Cards({ allPokemons }) {
  return (
    <div className="cards">
      {allPokemons?.map((p) => (
        <Card
          name={p.name}
          key={p.id}
          id={p.id}
          picture={p.picture}
          types={p.types}
        />
      ))}
    </div>
  );
}

export default Cards;
