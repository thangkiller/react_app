import { useState } from "react";
import { Sidebar } from "../global";
import Bag from "./Bag";
import { Basket } from "../store/icon";

function Modal() {
	const [bagOn, setBagOn] = useState(true);
	return (
		<>
			<Basket setOn={setBagOn} />
			<Bag on={bagOn} setOn={setBagOn} />
		</>
	);
}
export default Modal;
