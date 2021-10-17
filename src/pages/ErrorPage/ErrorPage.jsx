import React from "react";
import errorPage from "../../images/Not_Found.png";
import "./errorStyle.css";

const ErrorPage = () => {
	return (
		<div className="error-container">
			<img src={errorPage} alt="error404" />
		</div>
	);
};

export default ErrorPage;
