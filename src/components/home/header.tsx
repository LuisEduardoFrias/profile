/** @format */

import localFont from "next/font/local";
import Meteors from 'cp/meteors'
import "st/home/header.css";

export default function Header({ days_one }: { days_one: any }) {
    return (
        <>
            <Meteors />
        <header className={`${days_one.className} header-container `}>
            <h1>Hola! soy <strong>Luis Eduardo</strong> programador</h1>
            <h2>BackEnd y FrontEnd</h2>
            <div>
                <p>
                    {"Tengo mas de 4 años de experiencia en el mercado laboral, me destaco como backend con el lenguaje de "}
                    <img src="https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg" alt="Icom C#" />
                    <strong>.</strong>
                </p>
                <p>
                    {"Tambien desarrollo webs con "}
                    <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="Icon React" />
                    {", soy apacionado y dedicado"}
                    <strong>.</strong>
                </p>
            </div>
        </header>
        </>
    );
}
