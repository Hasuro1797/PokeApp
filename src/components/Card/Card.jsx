import React from "react";
import "./cardStyle.css";

const Card = ({ name, id, image, type }) => {
	return (
		<div className={`card-container ${type}`}>
			<h1>{`#0${id}`}</h1>
			<div className="image-container">
				<img src={image} alt={`pokemon N°${id}`} />
			</div>
			<h2>{name}</h2>
		</div>
	);
};

export default Card;
