
import Skill from "cp/skills/skill";
import Skills from "../../jsons/skills.json"
import { Draw } from "./back_end";
import "st/skills/back_end.css";

export default function Other() {
    return (
        <div className="backend-page">
            <h2>Another</h2>

            <div>
                <span>Experiencia Avanzada</span>
                <div>
                    {
                        Skills.another.advancedExperience.map((e, index) => <Draw key={index} skill={e} index={index} />)
                    }
                </div>

                <span>Intereces que he probado</span>
                <div>
                    {
                        Skills.another.middleExperience.map((e, index) => <Draw key={index} skill={e} index={index} />)
                    }
                </div>
            </div>
        </div>
    )
}