const getPokemonList = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data.results
  } catch (error) {
    console.log("error generating value", error);
  }
};
const getPokemon = async (name, param) => {
  try {
    pokemonParam = name || id;
    if (!pokemonParam) {
      throw new Error("name or id is requires");
    }
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonParam}`,
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error generating value", error);
  }
};
module.exports = {getPokemonList,getPokemon};