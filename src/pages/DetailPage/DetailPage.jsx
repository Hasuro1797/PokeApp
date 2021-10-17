/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemonDetail, notFoundParams } from "../../redux/actions/actions";
import "./detailStyle.css";
import { routes } from "../../helpers/routes";
import Spinner from "../../components/Spinner/Spinner";

const DetailPage = ({ match }) => {
	const pokemonDetail = useSelector((state) => state.pokemon.pokemonDetail);
	const pokemonExist = useSelector((state) => state.pokemon.pokemonExist);
	const loadingPokemon = useSelector((state) => state.pokemon.loadingPokemon);
	const dispatch = useDispatch();
	const history = useHistory();

	const conversionHeight = useCallback((height) => {
		let result = (parseInt(height) / 10) * 3.2804;
		let feet = Math.floor(result);
		let inch = Math.ceil((result - feet) * 12);
		return `${feet}' ${inch}''(${parseInt(height) / 10} m)`;
	}, []);

	const conversionWeight = useCallback((weight) => {
		let value = (parseInt(weight) / 10) * 2.2046;
		return `${value.toFixed(2)} lbs(${parseInt(weight) / 10} kg)`;
	}, []);

	useEffect(() => {
		const id = match.params.id;
		if (!isNaN(parseInt(id))) dispatch(getPokemonDetail(id));
		else dispatch(notFoundParams());
	}, []);

	const handleClick = () => {
		history.push(routes.home);
	};
	if (loadingPokemon) {
		return (
			<Spinner
				bg={"rgb(226, 226, 213)"}
				height={120}
				heightContainer={"100vh"}
				width={120}
			/>
		);
	}
	return pokemonExist && pokemonDetail ? (
		<div className="detail-container">
			<div className={`detail-card ${pokemonDetail?.types[0]?.type?.name}`}>
				<div className="image-container-detail">
					<img src={pokemonDetail.image} alt={pokemonDetail.name} />
				</div>
				<div className="name-container">
					<h1>{pokemonDetail.name}</h1>
					<h2>{`#0${pokemonDetail.id}`}</h2>
				</div>
				<div className="information-container">
					<div className="status-container">
						<div>
							<b>Height</b>
							<p>{conversionHeight(pokemonDetail.height)}</p>
						</div>
						<div>
							<b>Types</b>
							<ul>
								{pokemonDetail.types.map((element, index) => (
									<li key={index}>{element.type.name}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="second-information">
						<div>
							<b>Weight</b>
							<p>{conversionWeight(pokemonDetail.weight)}</p>
						</div>
						<div>
							<b>Abilities</b>
							<ul>
								{pokemonDetail.abilities.map((element, index) => (
									<li key={index}>{element.ability.name}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<button className="button-back" type="button" onClick={handleClick}>
				Volver
			</button>
		</div>
	) : (
		<div>
			<p>No hay resultados</p>
		</div>
	);
};

export default DetailPage;
