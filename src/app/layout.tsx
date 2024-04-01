/** @format */

import { ReactNode } from "react"
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

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
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
