const { PokemonMap, PokemonCommandManager } = require("./helper");

async function commandManager(commands,terminal) {
    const [type,...arg] = commands;
    switch (type) {
        case "pokemon":
            await PokemonCommandManager(arg);
            break;
        case "map": {
            await PokemonMap(arg);
            break;
        }

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