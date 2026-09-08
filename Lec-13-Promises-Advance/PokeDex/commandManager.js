const {getPokemonList} = require("./pokemon");
async function commandManager(commands,terminal) {
    const type = commands[0];
    switch (type) {
        case "pokemon":
            const pokemonList = await getPokemonList();
            console.log(pokemonList);
            break;
        case "exit": {
            terminal.close();
            return;
        }
        default:
            console.log(`command'${type}' notfound`);
            break;
    }
}

module.exports = commandManager;