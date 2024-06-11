/** @format */

import localFont from "next/font/local";
import Meteors from 'cp/meteors'
import { useSubscribeState } from '@/subscribe_state/index'
import "st/home/header.css";

export default function Header({ days_one }: { days_one: any }) {
    const [{language}, dispatch] = useSubscribeState(["language"])
    
    const text = {
        text1:{ES:"Hola! soy",EN:" Hello! I'm"},
        text2:{ES:" protramador",EN:" developer"},
        text3:{ES:"Tengo mas de 4 años de experiencia EN el mercado laboral, me destaco como backend con el lenguaje de ",EN:"I have over 4 years of experience in the job market, specializing as a backend developer with the language of"},
        text4:{ES:"Tambien desarrollo webs con ",EN:"I also develop websites using "},
        text5:{ES:", soy apacionado y dedicado.",EN:" I am passionate and dedicated."},
    }
    
    return (
        <>
        <Meteors />
        <header className={`${days_one.className} header-container `}>
            <h1>{text.text1[language]} <strong>Luis Eduardo</strong> {text.text2[language]}</h1>
            <h2>BackEnd y FrontEnd</h2>
            <div>
                <p>
                    {text.text3[language]}
                    <strong> C#</strong>
                </p>
                <p>
                    {text.text4[language]}
                    <strong>React</strong>
                    {text.text5[language]}
                </p>
            </div>
        </header>
        </>
    );
}
