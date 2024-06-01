"use client"
import { ReactElement } from "react"
import Image from "next/image";
import Li, { Option } from "./li.tsx";
import MenuList from "public/jsons/manu_list.json"
import Socials from "public/jsons/socials.json"
//import { useSubscribeState } from "subscribe_state"
import "st/home/footer.css";

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
                    {Socials.map((social: object, i: number) =>
                        <a href={social.href}>
                            <Image src={social.img} width={25} height={25} alt={social.alt} />
                        </a >)
                    }
                </div>
            </div>
        </footer >
    );
}
