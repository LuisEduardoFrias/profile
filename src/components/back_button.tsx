'use client'

import { useRouter } from 'next/navigation'
import Icon from "cp/icon";
import Styles from "st/back_button.module.css"

export default function BackButton() {
    const router = useRouter()
    return (
        <button onClick={() => { router.back() }} className={Styles.btn} >
            <Icon iconName={"arrow_back"} />
        </button>
    )
}