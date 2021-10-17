import { Route, Switch } from "react-router";
import { routes } from "./helpers/routes";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./app.css";
function App() {
	return (
		<>
			<Switch>
				<Route exact path={routes.home} component={HomePage} />
				<Route exact path={`${routes.detail}/:id`} component={DetailPage} />
				<Route path={routes.error} component={ErrorPage} />
			</Switch>
		</>
	);
}

export default App;
