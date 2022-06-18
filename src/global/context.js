import { createContext, useState } from "react";

export const Context = createContext();

function Provider({ children }) {
	const [offMore, setOffMore] = useState(false);
	const handlerGlobal = () => {
		setOffMore(true);
	};

	return (
		<Context.Provider value={{ offMore, setMore: () => setOffMore(false) }}>
			<div onClick={() => handlerGlobal()}>{children}</div>
		</Context.Provider>
	);
}

export default Provider;
