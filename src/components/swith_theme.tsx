"use client"
import { useState } from 'react';
import Tooltip, { arrow } from 'cp/tooltip';
import 'st/switch_theme.css'

export default function SwitchTheme() {
    const [show, setShow] = useState(false);

    function handleChange() {
        setCheck(!check);
    }

    const handleMouseEnter = () => {
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };
    
    return (
        <label className="switch-theme" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <input type="checkbox" defaultChecked={true} />
            <span className="slider-theme"></span>
            {show && <Tooltip 
                text={"Control to change dark or light theme!"} 
                time={2000} 
                hide={(value:boolean)=>setShow(value)}
                t_arrow={arrow.rightTop} 
                point={{x:-110,y:45,_x:null, _y:null}}/>}
        </label>
    )
}