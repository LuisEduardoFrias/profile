"use client"
import BookContainer, { Pages } from 'cp/book_container'
import BackButton from 'cp/back_button'
import FrontEnd from 'cp/skills/front_end'
import BackEnd from 'cp/skills/back_end'
import Other from 'cp/skills/other'
import Typing from 'cp/skills/typing'
import Meteors from 'cp/meteors'
import Icon from 'cp/icon'
import Slider from 'cp/slider'
import localFont from 'next/font/local'
import {language} from 'md/language'
import {State} from 'md/state'
import { useSubscribeState } from '@/subscribe_state/index'

//import { Slide, Fade, Zoom } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';

import "st/skills/skill.css"

const days_one = localFont({
    src: "../../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Skills() {
    const [state, dispatch] = useSubscribeState<State>(["language"])
    const title = state.language === language.en ? "</Skills>":"Habilidades";
    return (
        <>
            <h1 className={`${days_one.className} skill-title`}>{title}</h1>
            <Meteors />
            <BookContainer>
                <div className="sheet-container">
                    <BackButton />
                    <Slider>
                        <BackEnd />
                        <FrontEnd />
                        <Other />
                    </Slider>
                </div>
                <div className="sheet-container">
                    <Typing />
                </div>
            </BookContainer>
        </>
    )
}