import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "./global/context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider>
		<App />
	</Provider>
);
reportWebVitals();
