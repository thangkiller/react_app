import { createContext, useState } from "react";

export const Context = createContext();
let AppState = false;
let MoreState = false;

const ToggleMore = () => {
	console.log("thanh cong");
};

function Provider({ children }) {
	return (
		<Context.Provider
			value={{
				MoreState,
				setMore: ToggleMore,
			}}
		>
			<div>{children}</div>
		</Context.Provider>
	);
}

export default Provider;
