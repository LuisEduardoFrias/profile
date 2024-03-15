/** @format */

import Image from "next/image";

export default function Main() {
	return (
		<main>
			<Image src='/tridente_sc.webp' alt='logo' width={100} height={100} />
			<Image
				src='/profile.webp'
				width={100}
				height={100}
				alt='Image of profile'
			/>
		</main>
	);
}
