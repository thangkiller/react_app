import { useState, createContext } from "react";

export const Context = createContext();

function Provider({ children }) {
	const [value, setValue] = useState(0);
	return (
		<Context.Provider
			value={{
				data: value,
				build: (value) => setValue(value),
			}}
		>
			{children}
		</Context.Provider>
	);
}

export default Provider;
