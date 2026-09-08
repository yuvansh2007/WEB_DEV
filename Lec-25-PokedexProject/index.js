const express = require("express");
const axios = require("axios");
const { getPokemon, getPokemonList } = require("./pokemonController");
const app = express();
app.set("veiw engine","ejs");

app.get("/pokemon", async (req, res) => {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 20;

    const id = req.query.id || "";
    let responseData = null;
    if (id) {
      responseData = await getPokemon(id);
    } else {
      responseData = await getPokemonList(offset, limit);
    }

    app.render({
        
    })
    
    // res.json({
    //   message: "success",
    //   data: responseData,
    // });
  } catch (error) {
    console.log("Failed", error);
    res.json({
      message: "failed",
    });
  }
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000/");
});
