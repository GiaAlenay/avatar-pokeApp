import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { back } from "./background";
export const Card = ({ types, id, name, picture }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url( ${
          types !== undefined &&
          `${process.env.PUBLIC_URL}${back(types[0].name)}`
        })`,
        backgroundSize: "100% 100%",
      }}
      onClick={() => {
        navigate(`/pokemon/${id}`);
      }}
    >
      <div key={id}>
        <div className="title">
          <img
            className="titleContainer"
            src={process.env.PUBLIC_URL + "/title.png"}
            alt=" "
          />
          <div className="poketitlecontainer">
            <span className="pokeName">{name && name.toUpperCase()}</span>
          </div>
        </div>

        <div className="imgCont">
          <img src={picture} alt={name} className="mainimg" />
        </div>

        <div className="typesContainer">
          <img
            src={process.env.PUBLIC_URL + "/description.png"}
            // src="description.png"
            alt="description"
            className="description"
          />
          <div className="typesPoke">
            {types?.map((t, i) => (
              <div className="type" key={i}>
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
