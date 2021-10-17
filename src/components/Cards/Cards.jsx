import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes";
import "./cardsStyle.css";
import { useSelector } from "react-redux";
import NotResults from "../NotResults/NotResults";

const Cards = ({ input, pokemonList, offset, setOffset }) => {
	const loadingList = useSelector((state) => state.pokemon.loadingList);
	const [list, setList] = useState([]);
	const hasMore = () => {
		return (
			pokemonList.filter((poke) => poke.name.includes(input)).length >
			offset + 40
		);
	};

	useEffect(() => {
		const reduceOrFilterPokemon = () => {
			if (input.length === 0) {
				return pokemonList.slice(offset, offset + 40);
			}
			const filtered = pokemonList.filter((poke) =>
				poke.name.includes(input.toLowerCase())
			);
			return filtered.slice(offset, offset + 40);
		};
		setList((previusList) => previusList.concat(reduceOrFilterPokemon()));
	}, [offset, input, pokemonList]);
	if (loadingList) {
		return (
			<Spinner height={130} width={130} heightContainer="calc(100vh - 70px)" />
		);
	} else {
		return (
			<>
				{list.length !== 0 ? (
					<InfiniteScroll
						dataLength={list.length}
						hasMore={hasMore() ? true : false}
						next={() => setOffset((previusOffset) => previusOffset + 40)}
						loader={<Spinner height={80} width={80} />}
						className="container-infiniteScroll"
					>
						<div className="cards-container">
							{list.map((pokemon) => (
								<Link key={pokemon.id} to={`${routes.detail}/${pokemon.id}`}>
									<Card
										name={pokemon.name}
										id={pokemon.id}
										image={pokemon.image}
										type={pokemon.type}
									/>
								</Link>
							))}
						</div>
					</InfiniteScroll>
				) : (
					<NotResults />
				)}
			</>
		);
	}
};

export default Cards;
