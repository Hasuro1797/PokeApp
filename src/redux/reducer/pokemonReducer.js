import {
	GET_POKEMONS,
	POKEMON_DETAIL,
	LOADING_LIST,
	LOADING_POKEMON,
	GET_POKEMONS_FAIL,
	POKEMON_DETAIL_FAIL,
	NOT_FOUND_PARAMS,
} from "../actions/types";
const initialState = {
	pokemonList: [],
	loadingList: false,
	loadingPokemon: false,
	pokemonDetail: null,
	pokemonExist: true,
};

const PokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POKEMONS:
			return {
				...state,
				loadingList: false,
				pokemonList: action.payload,
			};
		case POKEMON_DETAIL:
			return {
				...state,
				loadingPokemon: false,
				pokemonDetail: action.payload,
			};
		case LOADING_LIST:
			return {
				...state,
				loadingList: true,
			};
		case LOADING_POKEMON:
			return {
				...state,
				loadingPokemon: true,
			};
		case GET_POKEMONS_FAIL:
			return {
				...state,
				pokemonList: [],
				loadingList: false,
			};
		case POKEMON_DETAIL_FAIL:
			return {
				...state,
				pokemonDetail: {},
				loadingPokemon: false,
				pokemonExist: false,
			};
		case NOT_FOUND_PARAMS:
			return {
				...state,
				pokemonExist: false,
			};
		default:
			return state;
	}
};

export default PokemonReducer;
