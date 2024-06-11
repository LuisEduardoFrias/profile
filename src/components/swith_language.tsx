"use client"
import { useState } from 'react';
import Tooltip, { arrow } from 'cp/tooltip';
import {language} from 'md/language'
import { useSubscribeState } from '@/subscribe_state/index'
import 'st/switch_language.css';

type TSwith = { 
    text: [string, string],
}

export default function SwitchLanguage({ text}: TSwith){
    const [state, dispatch] = useSubscribeState(["language"])
    const [check, setCheck] = useState(true);
    const [show, setShow] = useState(false);

    function handleChange() {
        dispatch({type: "ChangeLanguage", language: check ? language.es : language.en});
        setCheck(!check);
    }

    const handleMouseEnter = () => {
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

    return (
        <label className="switch-language" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <input type="checkbox" checked={check} onChange={handleChange} />
            <span className="slider-language">{check ? text[0] : text[1]}</span>
            {show && <Tooltip 
                text={"Control to change language, Spanish 'ES' or English 'EN'!"} 
                time={2000} 
                hide={(value:boolean)=>setShow(value)}
                t_arrow={arrow.rightTop} 
                point={{x:-110,y:45,_x:null, _y:null}}/>}
        </label>
    );
}