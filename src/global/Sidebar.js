import { useContext } from "react";
import { Context } from "../global/context";

function Sidebar({ children, element }) {
	const globalState = useContext(Context);
	const [spaceMore, setSpaceMore] = useState(false);
	const toggle = !globalState.offMore && spaceMore;
	element.props.setOn(toggle);
	console.log("thanh gi chis");
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
