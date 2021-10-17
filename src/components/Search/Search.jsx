import React from "react";
import "./searchStyle.css";
import logo from "../../images/logo.png";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleChange, input }) => {
	return (
		<div className="Search-container">
			<div className="logo-container">
				<img src={logo} alt="logo-pokemon" />
			</div>
			<div className="input-container">
				<input
					autoComplete="off"
					type="text"
					value={input}
					onChange={handleChange}
					placeholder="Search"
				/>
				<FaSearch className="icon" />
			</div>
		</div>
	);
};

export default Search;
