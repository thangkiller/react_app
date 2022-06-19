import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Poster.module.scss";

function Poster() {
	return (
		<div className={styles.poster}>
			<div>
				<h1>
					A CONSOLE FOR
					<br />
					EVERY WORKFLOW
				</h1>
				<p>Discover the perfect console for yours.</p>
			</div>
			<FontAwesomeIcon icon={["fa-light", "fa-angle-down"]} />
		</div>
	);
}

export default Poster;
