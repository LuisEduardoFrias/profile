"use client"
import { useEffect } from 'react';
import 'st/tooltip.css'

export enum arrow {
    centerTop="centerTop",
    leftTop="leftTop",
    rightTop="rightTop",
    centerBottom="centerBottom",
    leftBottom="leftBottom",
    rightBottom="rightBottom"
}

export type Point = {
    x:number,
    y:number,
    _y:number | null,
    _x:number | null,
}

type TTooltipProps = {
    text: string,
    point: Point,
    t_arrow: arrow,
    time: number,
    hide: (value:boolean)=>void
}

export default function Tooltip({text, point, hide, time = 1000, t_arrow=arrow.centerTop}:TTooltipProps) {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            hide(false);
        }, time);
        
        return () => {
            clearTimeout(timer);
        };
    }, [time, hide]);
    
    const Styles = {
        top:`${point.y}px`,
        left:`${point.x}px`,
        bottom:`${point._y}px`,
        right:`${point._x}px`
    }
    
    return (
        <div style={Styles} className={`tooltip ${t_arrow}`}>
            <span>{text}</span>
        </div>
    )
}