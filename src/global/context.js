import { createContext } from "react";

export const Context = createContext();

function Provider({ value, children }) {
	return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
