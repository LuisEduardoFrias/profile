"use client"
import { useState, ChangeEvent } from 'react'
import useCookie from 'hk/use_local_cookie'
import Tooltip, { arrow } from 'cp/tooltip'
import 'st/switch_theme.css'

export default function SwitchTheme() {
  const [show, setShow] = useState(false);
  const [{ isDark }, setCookie] = useCookie("theme", { isDark: false })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCookie('theme', { isDark: event.target.checked })
  }

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {

    setShow(false);
  };

  return (
    <label className="switch-theme" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <input id="swith-cb-theme" type="checkbox" defaultChecked={isDark} onChange={handleChange} />
      <span className="slider-theme"></span>
      {show && <Tooltip
        text={"Control to change dark or light theme!"}
        time={2000}
        hide={(value: boolean) => setShow(value)}
        t_arrow={arrow.rightTop}
        point={{ x: -110, y: 45, _x: null, _y: null }} />}
    </label>
  )
}