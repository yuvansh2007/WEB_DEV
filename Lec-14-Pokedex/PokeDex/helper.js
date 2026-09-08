const { getPokemonList, getPokemon, getPokemonMap } = require("./pokemon");

const callingParams = { url: "https://pokeapi.co/api/v2/pokemon" };
const PokemonCommandManager = async (arg) => {
  try {
    const [subCommand = "list", ...param] = arg; // next;
    switch (subCommand) {
      case "-n": {
        const { next, previous } = await getPokemonList(callingParams.next);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-p": {
        const { next, previous } = await getPokemonList(callingParams.previous);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-s": {
        await getPokemon(param.join("-"));
        break;
      }
      case "list": {
        const { next, previous } = await getPokemonList(callingParams.url);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      default: {
        console.log(`Invalid command,${subCommand}`);
        break;
      }
    }
  } catch (error) {
    console.log(" getting error", error);
  }
};
const callingMaps = { url: "https://pokeapi.co/api/v2/location" };
const PokemonMap = async (arg) => {
  try {
    const [subCmd = "empty"] = arg;
    switch (subCmd) {
      case "-L": {
        const { next, previous } = await getPokemonMap(callingMaps.next);
        callingMaps.next = next;
        callingMaps.previous = previous;
        break;
      }
      case "-R": {
        const { next, previous } = await getPokemonMap(callingMaps.previous);
        callingMaps.next = next;
        callingMaps.previous = previous;
        break;
      }
      case "empty":{
        const { next,previous} = await getPokemonMap(callingMaps.url);
        callingMaps.next = next;
        callingMaps.previous = previous;
        break;
      }
      default:
        console.log(`Invalid command,${subCmd}`);
        break;
    }
  } catch (error) {
    console.log(" getting error", error);
  }
};

module.exports = { PokemonCommandManager, PokemonMap };
