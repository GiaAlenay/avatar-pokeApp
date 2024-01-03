import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import axios from "axios";

function PokemonProvider({ children }) {
  const [remenberPage, setremenberPage] = useState(1);
  const baseUrl = "https://pokeapi.co/api/v2";
  const getAllPokemons = async (offset) => {
    try {
      const response = await axios.get(
        `${baseUrl}/pokemon?offset=${offset}&limit=${20}`
      );
      const allPokemonsPromise = response.data.results.map(async (p) => {
        const data = await axios.get(p.url);
        return {
          id: data.data.id,
          name: data.data.name,
          types: data.data.types.map((t) => {
            return { name: t.type.name };
          }),
          picture: data.data.sprites.other["official-artwork"].front_default,
        };
      });
      const allPokemonsDetails = await Promise.all(allPokemonsPromise);

      return { count: response.data.count, allPokemonsDetails };
    } catch (error) {
      return error;
    }
  };

  const getPokemonById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/pokemon/${id}`);
      const specieUrl = await axios.get(response.data.species.url);
      const evolutionChain = await axios.get(
        specieUrl.data.evolution_chain.url
      );
      const names = [];
      let base = evolutionChain.data.chain;

      while (base.species) {
        names.push(base.species.name);
        base =
          base.evolves_to.length > 0 ? base.evolves_to[0] : base.evolves_to;
      }

      const evolutionsDetails = names.map(async (n) => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`);
        return {
          id: data.data.id,
          name: data.data.name,
          types: data.data.types.map((t) => {
            return { name: t.type.name };
          }),
          picture: data.data.sprites.other["official-artwork"].front_default,
        };
      });

      return {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types.map((t) => {
          return { name: t.type.name };
        }),
        picture: response.data.sprites.other["official-artwork"].front_default,
        weight: response.data.weight,
        height: response.data.height,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        evolutionsDetails: await Promise.all(evolutionsDetails),
      };
    } catch (error) {
      throw error;
    }
  };

  return (
    <PokemonContext.Provider
      value={{ getAllPokemons, getPokemonById, setremenberPage, remenberPage }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
