const axios = require("axios");

const getPokemonList = async (offset, limit) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
  );
  const nextParams = response.data.next ? response.data.next.split("?") : [];
  const prevParams = response.data.prev ? response.data.prev.split("?") : [];

  let nextURL = null,
    prevURL = null;
  if (nextParams.length) {
    nextURL = "https://pokeapi.co/api/v2/pokemon/?" + nextParams[1];
  }
  if (prevParams.length) {
    prevURL = "https://pokeapi.co/api/v2/pokemon/?" + prevParams[1];
  }

  const pokemonData = {
    count: response.data.count,
    results: response.data.results,
    next: nextURL,
    prev: prevURL,
  };
  return pokemonData;
};

getPokemon = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};

module.exports = { getPokemonList, getPokemon,};
