import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</Provider>,
	document.getElementById("root")
);
