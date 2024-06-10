"use client"
import BookContainer, { Pages } from "cp/book_container";
import BackButton from "cp/back_button";
import Keyboard from "cp/keyboard";
import FrontEnd from "cp/skills/front_end";
import BackEnd from "cp/skills/back_end";
import Other from "cp/skills/other";
import Meteors from 'cp/meteors'
import Icon from "cp/icon"
import localFont from "next/font/local";
import Slider from '../../components/slider'

//import { Slide, Fade, Zoom } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';

import "st/skills/skill.css"

const days_one = localFont({
    src: "../../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Skills() {
    return (
        <>
            <h1 className={`${days_one.className} skill-title`}>{"</ Skills >"}</h1>
            <Meteors />
            <BookContainer>
                <div className="sheet-container">
                    <Slider>
                        <BackEnd />
                        <FrontEnd />
                        <Other />
                    </Slider>
                </div>
                <div className="sheet-container">
                    <Other2 />
                </div>
            </BookContainer>
        </>
    )
}

function Other2() {
    return (<div style={{ width: "100%", height: "100%", display: "grid", placeContent: "center" }}> <Keyboard /></div >)
}