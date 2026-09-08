const axios = require("axios");

const POKEMON_API = process.env.POKEAPI;
const DOMAIN = process.env.DOMAIN;

const getPokemonList = async (offset, limit) => {
  const response = await axios.get(
    `${POKEMON_API}/pokemon/?offset=${offset}&limit=${limit}`,
  );

  const nextParams = response.data.next ? response.data.next.split("?") : [];

  const prevParams = response.data.previous
    ? response.data.previous.split("?")
    : [];

  let nextUrl = null,
    prevUrl = null;

  if (nextParams.length) {
    nextUrl = `${DOMAIN}/pokemon/?` + nextParams[1];
  }

  if (prevParams.length) {
    prevUrl = `${DOMAIN}/pokemon/?` + prevParams[1];
  }
  const pokemonData = {
    count: response.data.count,
    results: response.data.results,
    next: nextUrl,
    previous: prevUrl,
  };

  return pokemonData;
};

const getPokemon = async (id) => {
  const response = await axios.get(`${POKEMON_API}/pokemon/${id}`);
  return response.data;
};

module.exports = {
  getPokemonList,
  getPokemon,
};
