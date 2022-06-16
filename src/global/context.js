import { createContext, useState } from "react";

export const Context = createContext();

const more = { state: false, ClickMore: false };
const ToggleMore = (ao) => {
	let { ClickMore, state } = ao;
	if (ClickMore === true) {
		ClickMore = false;
		if (state === true) state = false;
		state = true;
	} else {
		if (state === true) state = false;
	}
};

function Provider({ children }) {
	const [MoreState, setMoreState] = useState(more);

	const ClickApp = () => {
		ToggleMore(more);
		setMoreState(more);
	};
	return (
		<Context.Provider
			value={{
				MoreState: MoreState.state,
				setMore: () => {
					more.ClickMore = true;
				},
			}}
		>
			<div onClick={() => ClickApp()}>{children}</div>
		</Context.Provider>
	);
}

export default Provider;
