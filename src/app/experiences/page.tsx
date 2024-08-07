//
'use client'
import experiences from '../../jsons/experience.json';
import BackButton from 'cp/back_button'
import Meteors from 'cp/meteors'
import localFont from 'next/font/local'
import { language } from 'md/language'
import { State } from 'md/state'
import { useSubscribeState } from 'subscribe_state'
import 'st/experience/experience.css'

const days_one = localFont({
  src: "../../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Experiences() {
  const [state, dispatch] = useSubscribeState(["language"])
  const title = state.language === language.en ? "</Experiences>" :
    "Experiencias";

  return (
    <>
      <Meteors />
      <BackButton />
      <h1 className={`${days_one.className} experience-title`}>{title}</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p>{exp.cargo}</p>
            <h4>{'Tegnologies:'}</h4>
            <ul>
              {exp.tegnologies.map((icon, i) => (
                <li key={i}><img src={icon} alt="Icono Tecnología" /></li>
              ))}
            </ul>
            <h4>{'Responsabilidades:'}</h4>
            <ul>
              {exp.responsabilities.map((responsability, i) => (
                <li key={i}>{responsability}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}