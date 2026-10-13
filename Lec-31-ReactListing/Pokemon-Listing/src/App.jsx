import { useEffect, useState } from "react";

function PokemonCard({ name, url }) {
  const [showData, setShowData] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (showData) {
      const getPokemonData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      };

      getPokemonData();
    }
  }, [showData, url]);

  return (
    <>
      <p onClick={() => setShowData(!showData)} style={{ cursor: "pointer" }}>
        {name}
      </p>

      {showData && pokemon && (
        <div>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Type: {pokemon.types.map((item) => item.type.name).join(", ")}</p>
        </div>
      )}
    </>
  );
}

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  useEffect(() => {
    const GetPokemonData = async () => {
      if (!url) {
        return;
      }
      const response = await fetch(url);
      const pokemonData = await response.json();
      setNextUrl(pokemonData.next);
      setPreviousUrl(pokemonData.previous);
      setPokemonList(pokemonData.results);
    };
    GetPokemonData();
  }, [url]);
  return (
    <>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
      <button
        onClick={() => {
          setUrl(nextUrl);
        }}>
        Next Page
      </button>
      <button
        onClick={() => {
          setUrl(previousUrl);
        }}>
        Previous Page
      </button>
    </>
  );
}

export default App;
