//
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

export type Option = {
    src: string;
    alt: string;
    name: string;
    href: string;
};

export default function Li(
    {
        src,
        alt,
        name,
        href
    }: {
        src: string;
        alt: string;
        name: string;
        href: string;
    }): ReactElement {
    return (
        <li>
            <Link href={href}>
                <Image src={src} width={24} height={24} alt={alt} />
                <p className='tooltip'>{name}</p>
            </Link>
        </li>
    );
}