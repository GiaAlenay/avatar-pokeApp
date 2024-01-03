import React, { useContext, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PokemonContext } from "../../Context/PokemonContext";
import Cards from "../../Components/Cards/Cards";
import { Pagination } from "../../Components/Pagination/Pagination";
import "./Home.css";

function Home() {
  const { getAllPokemons, setremenberPage } = useContext(PokemonContext);
  const [allInformation, setallInformation] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;
  const navigate = useNavigate();
  useEffect(() => {
    if (page < 1 || page > 66) {
      page = 1;
      navigate("/?page=1");
    }
  }, [page]);

  const GetPokemons = async (offset) => {
    try {
      const data = await getAllPokemons(offset);

      setallInformation(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener información del Pokémon", error);
    }
  };

  useEffect(() => {
    if (page) {
      setremenberPage(page);
      GetPokemons((page - 1) * 20);
    }
  }, [page]);

  return (
    <div className="home">
      {loading ? (
        <div className="loaderCont">loading...</div>
      ) : (
        <>
          <div
            onClick={() => {
              navigate("/?page=1");
            }}
          >
            <img
              src={"logoPokemon.png"}
              alt="logoPokemon"
              className="PokemonLogo"
            />
          </div>
          <Pagination total={allInformation.count} currentPage={page} />
          <Cards allPokemons={allInformation.allPokemonsDetails} />
          <Pagination total={allInformation.count} currentPage={page} />
        </>
      )}
    </div>
  );
}

export default Home;
