
import { ReactElement } from "react"
import Image from "next/image";
import Li, { Option } from "cp/li.tsx";
import MenuList from "public/jsons/manu_list.json"
import Socials from "public/jsons/socials.json"
import "st/footer.css";

export default function Footer({ days_one }: { days_one: any }) {
    //
    return (
        <footer className="footer-container" >
            <nav className={days_one.className}>
                <ul>
                    {MenuList.map((li: Option, i: number) => <Li key={i} {...li} />)}
                </ul>
            </nav>
            <div>
                <button>
                    <Image src="/images/cv.png" width={25} height={25} alt={" icon"} />
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
