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

export default function Li({ src, alt, name, href }: Option): ReactElement {
    const DynamicComponent = require(`../../svg/${src}.tsx`).default;
   
    return (
        <li>
            <Link href={href}>
                <DynamicComponent />
                <p className='tooltip'>{name}</p>
            </Link>
        </li>
    );
}