require("dotenv").config();

const express = require("express");

const { getPokemonList, getPokemon } = require("./pokemon.controller");
const app = express();

app.set("view engine", "ejs");

app.get("/pokemon", async (req, res) => {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 10;

    const id = req.query.id || "";

    let responseData = null;

    if (id) {
      responseData = await getPokemon(id);
    } else {
      responseData = await getPokemonList(offset, limit);
    }

    res.render("pokemon", {
      pokemons: responseData.results,
      count: responseData.count,
      next: responseData.next,
      previous: responseData.previous,
    });

    // res.json({
    //   message: "Success",
    //   data: responseData,
    // });
  } catch (error) {
    console.log("Failed Getting Pokemon", error);
    res.json({
      message: "Failed",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}/`);
});
