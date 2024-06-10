import React, { useState, useEffect } from 'react'
import Icon from './icon'
import 'st/slider.css'

interface SliderProps {
  children: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const totalSlides = children.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    let interval;
    
    if (isAutoSlide) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoSlide]);

  const handleSlideClick = (index: number) => {
    //setCurrentSlide(index);
    setIsAutoSlide(false);
  };

  return (
    <div className="slider">
      {children.map((child, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          onClick={() => handleSlideClick(index)}
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

export default Slider;