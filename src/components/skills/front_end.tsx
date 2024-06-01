
import Skills from "public/jsons/skills.json";
import Skill from "cp/skills/skill";
import { Draw } from "./back_end";
import { Sk } from "md/skill";
import "st/skills/back_end.css";

export default function FrontEnd() {
    return (
        <div className="backend-page">
            <h2>Front End</h2>

            <div>
                <span>Experiencia Avanzada</span>
                <div>
                    {
                        Skills.frontend.advancedExperience.map((e, index)=> <Draw skill={e} index={index} />)
                    }
                </div>

                <span>Experiencia Intermedia</span>
                <div>
                    {
                        Skills.frontend.middleExperience.map((e, index)=> <Draw skill={e} index={index} />)
                    }
                </div>
            </div>
        </div>
    )
}