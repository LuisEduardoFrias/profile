"use client"
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Meteors from 'cp/meteors'
import Resize from '../components/resize'
import { Inter } from 'next/font/google'
import SwitchTheme from 'cp/swith_theme'
import SwitchLanguage from 'cp/swith_language'

import {language} from 'md/language'
import {State} from 'md/state'
import Reducer from '@/reducer/reducer'
import useInitialize from '@/subscribe_state/index'

import Styles from 'st/layout.module.css'
import 'st/globals.css'

const inter = Inter({ subsets: ["latin"] });

/*export const metadata: Metadata = {
    title: "Portafolio Luis E.F.",
    description: "Portafolio"
};*/

const initial: State = {
    language: language.en
}

export default function RootLayout({children}: {children: ReactNode}) {
    useInitialize<State>(Reducer, initial);
    return (
        <html lang='es'>
            <head>
                <title>Portafolio Luis E.F.</title>
                <meta name="description" content="Portafolio" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                {//<Resize />
                }
                <SwitchLanguage text={["EN","ES"]} />
                <SwitchTheme />
                <Meteors className="layout-meteors" />
                <div className="bodyContainer">
                    <div className={Styles.backContainerLayout}>
                        <div className={Styles.containerLayout}>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
