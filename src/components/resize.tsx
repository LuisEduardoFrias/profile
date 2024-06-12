"use client"
import { useState, useEffect } from 'react'
import "st/resize.css"

export default function Resize() {
    const [size, setSize] = useState({width: 0, height: 0})
    
    useEffect(() => {
        setSize({width:window.innerWidth, height: window.innerHeight});
       
        const handleResize = () => {
          setSize({width:window.innerWidth, height: window.innerHeight});
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    return (
        <div className="container">
            <label>width: {size.width}px</label>
            <label>height: {size.height}px</label>
        </div>
    )
}