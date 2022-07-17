import { Instagram, Twitter, Facebook, Youtube } from "../store/icon";
import styles from "./footer.module.scss";

const $ = styles;

function Subscribe({ style }) {
	return (
		<div className={$.subscribe}>
			<div className={$.title}>SUBSCRIBE TO MONOGRAM</div>
			<div className={$.content}>
				<p className={$.caption}>
					Master productivity with Creative Console and get all the
					latest Monogram news.
				</p>
				<div className={$.email}>
					<input type="email" placeholder=" Email Address" />
					<button>SUBMIT</button>
				</div>
				<div className={$.fanpage}>
					<a href="https://instagram.com/monogramcc">
						<Instagram />
					</a>

					<a href="https://twitter.com/monogramcc">
						<Twitter />
					</a>

					<a href="https://facebook.com/monogramcc">
						<Facebook />
					</a>

					<a href="https://www.youtube.com/user/paletteUI">
						<Youtube />
					</a>
				</div>
			</div>
			<div className={$.company}>© Monogram 2022</div>
		</div>
	);
}
export default Subscribe;
