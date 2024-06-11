//
import { ReactElement } from "react";
import Image from "next/image";
import {language} from "md/language";
import Link from "next/link";

export type Option = {
    src: string;
    alt: string;
    name: [string, string];
    href: string;
    language: typeof language;
};

export default function Li({ src, alt, name, href, language : lg}: Option): ReactElement {
    const DynamicComponent = require(`../../svg/${src}.tsx`).default;
   
    return (
        <li>
            <Link href={href}>
                <DynamicComponent />
                <p className='footer_tooltip'>{name[lg === language.en ? 0 : 1]}</p>
            </Link>
        </li>
    );
}