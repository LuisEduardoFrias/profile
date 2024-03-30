/** @format */

import localFont from "next/font/local";
import "st/header.css";

export default function Header({ days_one }: { days_one: any }) {
	return (
		<header className="header-container">
			<div>
				<div className={days_one.className}>
					<h1>Hola! soy programador </h1>
					<h2>BackEnd y FrontEnd</h2>
					<div>
						<p>
							{"soy programador fullStack, me apasiona crear soliciones innovadora y eficientes para sastisfacer las necesidades de los usuairos."}
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
