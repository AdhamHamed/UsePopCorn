import React from "react";
import { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./Components/StarRating";
import "./index.css";
import App from "./App";

function Test() {
	const [movieRating, setMovieRating] = useState(0);
	return (
		<div>
			<StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
			<p>This Movie Was Rated {movieRating} stars</p>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
