import axios from "axios";
import { returnErrors } from "./errorActions";
import {
	GET_POKEMONS,
	LOADING_LIST,
	LOADING_POKEMON,
	POKEMON_DETAIL,
	GET_POKEMONS_FAIL,
	POKEMON_DETAIL_FAIL,
	NOT_FOUND_PARAMS,
} from "./types";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemons = () => {
	return async (dispatch) => {
		dispatch(loadingList());
		try {
			const res = await axios.get(`${API_URL}/pokemon?limit=1120`);
			const { results } = res.data;
			dispatch({
				type: GET_POKEMONS,
				payload: await listPokemonInformation(results),
			});
		} catch (error) {
			dispatch({
				type: GET_POKEMONS_FAIL,
			});
			dispatch(returnErrors(error.response?.data, error.response?.status));
		}
	};
};

export const loadingList = () => {
	return {
		type: LOADING_LIST,
	};
};
export const loadingPokemon = () => {
	return {
		type: LOADING_POKEMON,
	};
};

export const notFoundParams = () => {
	return {
		type: NOT_FOUND_PARAMS,
	};
};

export const getPokemonDetail = (idPokemon) => {
	return async (dispatch) => {
		dispatch(loadingPokemon());
		try {
			const res = await axios.get(`${API_URL}/pokemon/${idPokemon}/`);
			const { id, name, height, weight, types, abilities, sprites } = res.data;
			dispatch({
				type: POKEMON_DETAIL,
				payload: {
					id,
					name,
					height,
					weight,
					types,
					abilities,
					image:
						sprites.other?.["official-artwork"]?.front_default ||
						sprites.front_default,
				},
			});
		} catch (error) {
			dispatch({
				type: POKEMON_DETAIL_FAIL,
			});
			dispatch(returnErrors(error.response?.data, error.response?.status));
		}
	};
};
const listPokemonInformation = async (pokemons) => {
	let results = [];
	try {
		results = await Promise.all(
			pokemons.map(async (element) => {
				let res = await axios.get(element.url);
				return {
					id: res.data.id,
					name: element.name,
					image:
						res.data?.sprites?.other?.["official-artwork"]?.front_default ||
						res.data?.sprites?.front_default,
					type: res.data?.types[0]?.type?.name,
				};
			})
		);
		return results;
	} catch (error) {
		console.error(error);
	}
};
