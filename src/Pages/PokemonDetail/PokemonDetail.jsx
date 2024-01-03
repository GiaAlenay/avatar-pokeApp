import React, { useContext, useState, useEffect } from "react";
import "./PokemonDetail.css";
import { back } from "./PokemonDetailBackground.js";
import { useNavigate, useParams } from "react-router-dom";
import { PokemonContext } from "../../Context/PokemonContext";
import { Card } from "../../Components/Card/Card.jsx";
import { FaArrowCircleLeft } from "react-icons/fa";
export const PokemonDetail = (props) => {
  const { getPokemonById, remenberPage } = useContext(PokemonContext);
  const { id } = useParams();
  const [allInformation, setallInformation] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const GetPokemon = async (id) => {
    try {
      const data = await getPokemonById(id);
      setallInformation(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      seterror("Pokemon " + error.response.data + " " + error.response.status);
    }
  };

  useEffect(() => {
    if (id) {
      GetPokemon(id);
    }
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="loaderCont">
          <div>loading....</div>
        </div>
      ) : error !== "" ? (
        <div className="loaderCont">{error}</div>
      ) : (
        <div
          className="pokeDetail"
          style={{
            backgroundImage: `url( ${
              allInformation.id !== undefined
                ? back(allInformation.types[0].name)
                : "https://i.pinimg.com/originals/ba/7d/3e/ba7d3ee8577d9e486e644f83ce4451f0.jpg"
            })`,
          }}
        >
          <div className="PokeAllInfoCont">
            <button
              className="GobackBtn"
              onClick={() => {
                navigate(`/?page=${remenberPage}`);
              }}
            >
              <FaArrowCircleLeft size={50} />
            </button>
            <div className="pokeNameDetailCont">
              <div className="pokeNameDetail">
                <h2>{allInformation.name}</h2>
              </div>
            </div>

            <div className="gridContainer">
              <div>
                <img
                  className="pokePic"
                  src={allInformation.picture}
                  alt={allInformation.name}
                />
              </div>
              <div className="TextDetailContainer">
                <div className="pokeDetailTypes">
                  <div>
                    <h3>HEIGHT: {allInformation.height}</h3>
                    <h3>WEIGHT: {allInformation.weight}</h3>
                  </div>
                  <div>
                    <h3>TYPES:</h3>
                    {allInformation.types.map((t, i) => (
                      <div key={i}>-{t.name}</div>
                    ))}
                  </div>
                </div>
                <div className="statistics-container">
                  <div>
                    <h3>STATISTICS:</h3>
                    <div className="statisticProgrese">
                      <span>HP </span>
                      <div className="progress">
                        <div
                          className="progress-Done"
                          style={{ width: `${allInformation.hp * 2}px` }}
                        >
                          {allInformation.hp}
                        </div>
                      </div>
                    </div>

                    <div className="statisticProgrese">
                      <span>ATTACK </span>
                      <div className="progress">
                        <div
                          className="progress-Done"
                          style={{ width: `${allInformation.attack * 2}px` }}
                        >
                          {allInformation.attack}
                        </div>
                      </div>
                    </div>

                    <div className="statisticProgrese">
                      <span>SPEED </span>
                      <div className="progress">
                        <div
                          className="progress-Done"
                          style={{ width: `${allInformation.speed * 2}px` }}
                        >
                          {allInformation.speed}
                        </div>
                      </div>
                    </div>

                    <div className="statisticProgrese">
                      <span>DEFENSE </span>
                      <div className="progress">
                        <div
                          className="progress-Done"
                          style={{ width: `${allInformation.defense * 2}px` }}
                        >
                          {allInformation.defense}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="EvolutionsContainer">
              {allInformation.evolutionsDetails.length > 0 ? (
                allInformation.evolutionsDetails.map((p) => (
                  <Card
                    name={p.name}
                    key={p.id}
                    id={p.id}
                    picture={p.picture}
                    types={p.types}
                  />
                ))
              ) : (
                <>No evolutions to show</>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
