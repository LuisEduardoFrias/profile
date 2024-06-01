"use client"
import { ReactElement } from "react"
import Image from "next/image";
import Li, { Option } from "./li";
import MenuList from "../../jsons/manu_list.json"
import Socials from "../../jsons/socials.json"
//import { useSubscribeState } from "subscribe_state"
import "st/home/footer.css";

type Social = {
    href: string,
    img: string,
    alt: string,
}

export default function Footer({ days_one }: { days_one: any }) {
    // const [state, dispatch] = useSubscribeState(["name"]);

    return (
        <footer className="footer-container" >
            <nav className={days_one.className}>
                <ul>
                    {MenuList.map((li: Option, i: number) => <Li key={i} {...li} />)}
                </ul>
            </nav>
            <div>
                <button style={{ color: "white", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <Image src="/images/pdf.png" width={25} height={25} alt={" icon"} />
                    {"CV"}
                </button>
                <div>
                    {Socials.map((social: Social, i: number) =>
                        <a key={i} href={social.href}>
                            <Image src={social.img} width={25} height={25} alt={social.alt} />
                        </a >)
                    }
                </div>
            </div>
        </footer >
    );
}
