"use client"
import { useState } from 'react'
import Skills from '../../jsons/skills.json'
import { Skill as Sk } from 'md/skill'
import Image from 'next/image'
import 'st/skills/back_end.css'

type TDrawProps = { 
    skill: Sk, 
    index: number, 
    selectInd: number, 
    onclick:()=>void 
}

export function Draw({ skill, index, selectInd, onclick}: TDrawProps) {
    
    const Styles = {
        gridArea:`s${index+1}`, 
    }

    return (
        <div key={index} style={Styles} onClick={onclick} >
            <div>
              { skill.href && <Image src={skill.href} width={70} height={70} alt={skill.alt} />}
              { skill.name && <span>{skill.name}</span> }
            </div>
            <div></div>
        </div>
    )
}

export default function BackEnd() {
    const [selectInd, setSelect] = useState(-1)
    
    const skills = [...Skills.backend.advancedExperience, ...Skills.backend.middleExperience];
    let count = skills.length;
    count = count/2 === 0 ? count : count+1;
    
    const StyleGrid = {
        gridTemplateColumns: `repeat(6, 50px`,
        gridTemplateRows: `repeat(6, 50px`,
    }

    return (
        <div className="backend-page">
            <h2>Back End</h2>

            <div style={StyleGrid}>
                {
                    skills.map((e: Sk, index) => <Draw key={index} selectInd={selectInd} onclick={()=> setSelect(index)} skill={e} index={index} />)
                }
            </div>
        </div>
    )
}

/*

Puedes categorizarlas de la siguiente manera en tu portafolio:

Experiencia Avanzada (4 años):
C#
ASP.NET Core
APIs RESTful
Postman
SQL Server
Experiencia Intermedia (menos de 1 año):
Node.js
Express
MongoDB
Para el título podrías poner algo como "Tecnologías Dominadas"
para las que tienes 4 años de experiencia, y "Otras Tecnologías de Interés" 

para aquellas en las que estás trabajando con menos de 1 año de experiencia.
*/