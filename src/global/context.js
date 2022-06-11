import { createContext, useState } from "react";

export const Context = createContext();

let ClickMore = false;
const ToggleMore = (ClickMore, MoreState) => {
	if (ClickMore === true) {
		ClickMore = false;
		if (MoreState === true) return false;
		return true;
	} else {
		if (MoreState === true) return false;
	}
};

function Provider({ children }) {
	const [MoreState, setMoreState] = useState(false);
	const ClickApp = () => {
		setMoreState(ToggleMore(ClickMore, MoreState));
	};
	return (
		<Context.Provider
			value={{
				MoreState,
				setMore: () => {
					ClickMore = true;
				},
			}}
		>
			<div onClick={() => ClickApp()}>{children}</div>
		</Context.Provider>
	);
}

export default Provider;
