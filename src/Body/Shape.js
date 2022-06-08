import { Context } from "../global/context";

function Shape() {
	return (
		<p
			style={{
				marginTop: "300px",
				marginBottom: "300px",
				marginLeft: "50px",
				cursor: "pointer",
			}}
		>
			Events are normally used in combination with functions, and the
			function will not be executed before the event
		</p>
	);
}
export default Shape;
