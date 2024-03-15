/** @format */

import Header from "cp/home/header";
import Main from "cp/home/main";
import Footer from "cp/home/footer";
import localFont from "next/font/local";
import "st/home.css";

const days_one = localFont({
	src: "../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Home() {
	return (
		<div className='back-container-home'>
			<div className='container-home'>
				<Header days_one={days_one} />
				<Main />
				<Footer days_one={days_one} />
			</div>
		</div>
	);
}
