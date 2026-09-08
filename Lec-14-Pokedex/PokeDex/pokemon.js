const getPokemonList = async (url) => {
  if (!url) {
    throw new Error("Error page does not exist");
  }
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((Element) => {
    console.log(Element.name);
  });
  return {
    next: data.next,
    previous: data.previous,
  };
};

const getPokemonMap = async (url) => {
  if (!url) {
    throw new Error("Error page does not exist");
  }
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((Element) => {
    console.log(Element.name);
  });
  return {
    next: data.next,
    previous: data.previous,
  };
};
const getPokemon = async (name, param) => {
  try {
    const pokemonParam = name || id;
    if (!pokemonParam) {
      throw new Error("name or id is requires");
    }
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonParam}`,
    );
    const data = await response.json();
    console.log("name = ",data.name);
    console.log("weight = ",data.weight);
    console.log("height = ",data.height);
  } catch (error) {
    console.log("error generating value", error);
  }
};
module.exports = { getPokemonList, getPokemon,getPokemonMap };
