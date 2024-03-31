/** @format */

import { ReactNode } from "react"
import type { Metadata } from "next";
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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
