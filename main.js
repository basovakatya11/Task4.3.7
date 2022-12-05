import { View } from "./modules/view.js";
import { Search } from "./modules/search.js";
import { Api } from "./modules/api.js";
import { Select } from "./modules/select.js";

const view = new View();
const api = new Api();
const select = new Select();
const search = new Search(view, api);
