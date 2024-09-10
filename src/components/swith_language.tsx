"use client"
import { useState, useEffect } from 'react'
import Tooltip, { arrow } from 'cp/tooltip'
import { language } from 'md/language'
import useCookie from 'hk/use_local_cookie'
import { State } from 'md/state'
import { useSubscribeState } from 'subscribe_state';
import 'st/switch_language.css'

type TSwith = {
  text: [string, string],
}

export default function SwitchLanguage({ text }: TSwith) {
  const [state, dispatch] = useSubscribeState(["language"])
  const [{ isEnglish }, setCookie] = useCookie('language', { isEnglish: false });
  const [show, setShow] = useState(false);
  //    const [check, setCheck] = useState(isEnglish);

  useEffect(() => {
    dispatch({ type: "ChangeLanguage", language: !isEnglish ? language.es : language.en });
  }, [isEnglish, dispatch])

  function handleChange() {
    setCookie('language', { isEnglish: !isEnglish });
    dispatch({ type: "ChangeLanguage", language: isEnglish ? language.es : language.en });
    // setCheck(!isEnglish);
  }

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <label className="switch-language" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <input type="checkbox" checked={!isEnglish} onChange={handleChange} />
      <span className="slider-language">{isEnglish ? text[0] : text[1]}</span>
      {show && <Tooltip
        text={"Control to change language, Spanish 'ES' or English 'EN'!"}
        time={2000}
        hide={(value: boolean) => setShow(value)}
        t_arrow={arrow.rightTop}
        point={{ x: -110, y: 45, _x: null, _y: null }} />}
    </label>
  );
}