'use client'

import { useRouter } from 'next/navigation'
import Icon from "cp/icon";
import Styles from "st/back_button.module.css"

export default function BackButton() {
    const router = useRouter()
    return (
        <button onClick={() => { router.back() }} className={Styles.btn} >
            <Icon wght={700} fill={1} grad={200} opsz={20} iconName={"arrow_back"} />
        </button>
    )
}