//
import { ReactElement } from "react";
import Image from "next/image";

type Option = {
	src: string;
	alt: string;
	name: string;
};

export default function Li(
	{
		src,
		alt,
		name
	}: {
		src: string;
		alt: string;
		name: string
	}): ReactElement {
	return (
		<li>
			<a>
				<Image src={src} width={24} height={24} alt={alt} />
				<p className='tooltip'>{name}</p>
			</a>
		</li>
	);
}