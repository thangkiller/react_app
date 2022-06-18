import { createContext, useState } from "react";

export const Context = createContext();

function setMore() {
	data.offMore = false;
}
const data = {
	offMore: false,
	setMore,
};

function handlerGlobal() {
	data.offMore = true;
	console.log("data", data);
}

function Provider({ children }) {
	// const [MoreState, setMoreState] = useState(more);

	// const ClickApp = () => {
	// 	ToggleMore(more);
	// 	setMoreState(more);
	// };
	return (
		<Context.Provider value={data}>
			<div onClick={() => handlerGlobal()}>{children}</div>
		</Context.Provider>
	);
}

export default Provider;
