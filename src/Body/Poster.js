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
			<a>
				<svg
					class="downward-indicator-module--downIcon--Hlhtj animations-module--slideUp--Ztp7W animations-module--slideUpStart--9cuO8"
					width="1.5em"
					height="1.5em"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
					></path>
				</svg>
			</a>
		</div>
	);
}

export default Poster;
