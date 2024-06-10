
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Meteors from 'cp/meteors'
//import Resize from '../components/resize'
import { Inter } from 'next/font/google'
import 'st/globals.css'
import Styles from 'st/layout.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portafolio Luis E.F.",
    description: "Portafolio"
};

export default function RootLayout({
    children
}: {
    children: ReactNode;
}) {
    return (
        <html lang='es'>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                {//<Resize />
                }
                <Meteors />
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
