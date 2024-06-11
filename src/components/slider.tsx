import React, { useState, useEffect } from 'react'
import Icon from './icon'
import 'st/slider.css'

interface SliderProps {
  children: React.ReactNode[];
}

export default function Slider({ children }: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoSlide, setIsAutoSlide] = useState(true);
    const totalSlides = children.length;

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    const handleMouseEnter = () => {
        setIsAutoSlide(false);
        setInterval(() => {
            setIsAutoSlide(true);
        }, 10000);
    };

    const handleMouseLeave = () => {
        setIsAutoSlide(false);
        setInterval(() => {
            setIsAutoSlide(true);
        }, 10000);
    };
  
    useEffect(() => {
        let interval: NodeJS.Timeout;
        
        if (isAutoSlide) {
          interval = setInterval(() => {
            nextSlide();
          }, 5000);
        }
        return () => clearInterval(interval);
    }, [currentSlide, isAutoSlide]);

    return (
        <div className="slider">
          {children.map((child, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              {child}
            </div>
          ))}
          <button className="arrow prev" onClick={prevSlide}>
            <Icon iconName="chevron_left" wght={700} grad={200} />
          </button>
          <button className="arrow next" onClick={nextSlide}>
            <Icon iconName="chevron_right" wght={700} grad={200} />
          </button>
        </div>
    );
};
