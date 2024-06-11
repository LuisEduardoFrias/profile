"use client"
import { useState } from 'react';
import Tooltip, { arrow } from 'cp/tooltip';
import 'st/switch_language.css';

type TSwith = { 
    text: [string, string],
    className:string,
    change: (value:boolean) => void
}

export default function SwitchLanguage({ text, change, className }: TSwith){
    const [check, setCheck] = useState(true);
    const [show, setShow] = useState(false);

    function handleChange() {
        setCheck(!check);
        //change(!check);
    }

    const handleMouseEnter = () => {
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

    return (
        <label className={`switch-language ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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