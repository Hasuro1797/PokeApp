import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import errorReducer from "./errorReducer";

const rootReducers = combineReducers({
	pokemon: pokemonReducer,
	error: errorReducer,
});

export default rootReducers;
