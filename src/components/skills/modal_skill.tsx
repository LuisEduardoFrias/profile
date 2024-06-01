import Icon from "cp/icon"
import Styles from "st/skills/modal_skill.module.css"

type ModalType = {
    href: string,
    alt: string,
    name: string,
    description: string,
    onClick: () => void
}

export default function ModalSkill({ href, alt, name, description, onClick }: ModalType) {
    return (
        <dialog open className={Styles.dialogContainer} >
            <button onClick={onClick}>
                <Icon iconName={"close"} />
            </button>
            <span>{name}</span>
            <span>{description}</span>
        </dialog>
    )
}