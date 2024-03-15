/** @format */

import Image from "next/image";
import localFont from "next/font/local";

type Option = {
	src: string;
	alt: string;
	name: string;
};

function Li({ src, alt, name }: { src: string; alt: string; name: string }) {
	return (
		<li>
			<a>
				<Image src={src} width={24} height={24} alt={alt} />
				<p className='tooltip'>{name}</p>
			</a>
		</li>
	);
}

export default function Footer({ days_one }: { days_one: any }) {
	//
	const lis: Option[] = [
		{
			src: "/skills2.png",
			alt: "Skills icon",
			name: "Skill"
		},
		{
			src: "/projects.png",
			alt: "Projects icon",
			name: "Projects"
		},
		{
			src: "/skills2.png",
			alt: "Skills icon",
			name: "Skill"
		},
		{
			src: "/skills2.png",
			alt: "Skills icon",
			name: "Skill"
		},
		{
			src: "/skills2.png",
			alt: "Skills icon",
			name: "Skill"
		}
	];

	return (
		<footer>
			<nav className={days_one.className}>
				<ul>
					{lis.map((li: Option, i: number) => (
						<Li key={i} {...li} />
					))}
				</ul>
			</nav>
		</footer>
	);
}
