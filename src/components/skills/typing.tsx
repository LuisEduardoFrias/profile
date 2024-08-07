import KeyBoard from 'cp/keyboard'
import { language } from 'md/language'
import { State } from 'md/state'
import { useSubscribeState } from 'subscribe_state'
import 'st/skill/typing.css'

export default function Typing() {
  const [state, dispatch] = useSubscribeState(["language"])
  const text = state.language === language.es ? "La programación es el arte de crear instrucciones para que las computadoras realicen tareas específicas. Con código, los programadores dan vida a programas y aplicaciones que mejoran nuestra interacción con la tecnología." : "Programming is the art of creating instructions for computers to perform specific tasks. With code, programmers bring programs and applications to life that enhance our interaction with technology."

  return (
    <div className="typing-container" >
      <div className="typing-text" >
        <TypingText text={text} defaultValue="" />
      </div>
      <div className="typing-keyboard" >
        <KeyBoard />
      </div>
    </div>
  )
}


import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string | null | undefined;
  defaultValue: string | null | undefined;
}

export function TypingText({ text, defaultValue }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  text = text ?? defaultValue;

  useEffect(() => {
    if (text) {
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, currentIndex));
        setCurrentIndex((prevIndex) => (prevIndex === text.length ? 0 : prevIndex + 1));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [text, currentIndex]);

  return <span>{text ? displayedText : '|'} </span>;
};