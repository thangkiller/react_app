import { useContext } from "react";
import { Context } from "../global/context";

function Sidebar({ children, element }) {
	const globalState = useContext(Context);
	const toggle = !globalState.offMore && element.props.open.toggle;
	element.props.open.toggle = toggle;
	console.log(element.props);
	return (
		<div
			onClick={(e) => {
				element.props.open.setToggleOn(!toggle);
				globalState.setMore();
				e.stopPropagation();
			}}
		>
			{children}
			{element}
		</div>
	);
}

export default Sidebar;
