import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./spinner.css";

const Spinner = ({ bg = "none", heightContainer = "none", height, width }) => {
	return (
		<div
			className="spinner-container"
			style={{ backgroundColor: bg, height: heightContainer }}
		>
			<Loader type="Oval" color="#272727" height={height} width={width} />
		</div>
	);
};

export default Spinner;
