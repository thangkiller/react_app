import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Poster({ img, slogan, content, style }) {
	return (
		<div className={style}>
			<>
				<img src={img} />
				<div>
					<h1>{slogan}</h1>
					<p>{content}</p>
				</div>
			</>
			{false && (
				<a>
					<svg
						className="downward-indicator-module--downIcon--Hlhtj animations-module--slideUp--Ztp7W animations-module--slideUpStart--9cuO8"
						width="1.5em"
						height="1.5em"
						fillRule="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
						></path>
					</svg>
				</a>
			)}
		</div>
	);
}

export default Poster;
