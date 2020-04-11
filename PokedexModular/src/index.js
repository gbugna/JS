import { getPokemonData, apiLink } from "./consultas.js";

import { createHomePage } from "./ui.js";

createHomePage(getPokemonData(apiLink));
