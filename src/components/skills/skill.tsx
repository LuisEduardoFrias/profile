
import Styles from "st/skills/box_skill.module.css"

export default function Skill({ href, alt, name }: { href: string, alt: string, name: string}) {
    return (
        <div className={Styles.container}>
            <div className={Styles.subContainer}>
                <div></div>
                <div>
                    <img src={href} width="50" height="50" alt={alt} />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={Styles.tooltip}>
                    <span>{name}</span>
                </div>
            </div>
        </div >
    )

}