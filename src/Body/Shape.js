import { useContext } from "react";
import { Context } from "./Body";

function Shape() {
	const nam = useContext(Context);
	console.log("year", nam);
	return (
		<p
			style={{
				marginTop: "300px",
				marginBottom: "300px",
			}}
		>
			hom nay la ngay truc ban cua toi co danh sach tranh thu la 19 dong
			chi
		</p>
	);
}
export default Shape;
