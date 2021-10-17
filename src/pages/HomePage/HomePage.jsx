/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Search from "../../components/Search/Search";
import "./homeStyle.css";
import { getPokemons } from "../../redux/actions/actions";

const HomePage = () => {
	const [input, setInput] = useState("");
	const [offset, setOffset] = useState(0);
	const dispatch = useDispatch();
	const pokemonList = useSelector((state) => state.pokemon.pokemonList);
	const loading = useSelector((state) => state.pokemon.loadingList);

	useEffect(() => {
		if (!pokemonList.length) dispatch(getPokemons());
	}, []);

	const handleChange = (e) => {
		setOffset(0);
		setInput(e.target.value);
	};
	return (
		<div className="Home-container">
			<Search handleChange={handleChange} input={input} />
			<Cards
				key={input}
				input={input}
				pokemonList={pokemonList}
				offset={offset}
				setOffset={setOffset}
				loading={loading}
			/>
		</div>
	);
};

export default HomePage;
