
import Skills from "public/jsons/skills";
import Skill from "cp/skills/skill";
import { Sk } from "md/skill";
import "st/skills/back_end.css";

export function Draw({ skill, index }: { skill: Sk, index: number }) {
    return (
        <div key={index} className="flex-1 flex-col">
            <Skill key={index} {...skill} />
        </div>
    )
}

export default function BackEnd() {


    return (
        <div className="backend-page">
            <h2>Back End</h2>

            <div>
                <span>Experiencia Avanzada</span>
                <div>
                    {
                        Skills.backend.advancedExperience.map((e, index) => <Draw skill={e} index={index} />)
                    }
                </div>

                <span>Experiencia Intermedia</span>
                <div>
                    {
                        Skills.backend.middleExperience.map((e, index)=> <Draw skill={e} index={index} />)
                    }
                </div>
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