/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EEarO8FgJtm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react"
import Link from "next/link"

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

function CardHeader({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

function CardContent({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

function CardTitle({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

function CardDescription({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}


export default function Projects() {
    return (
        <div style={{color:"white", margin:"20px 0 0 20px", borderTop: "3px solid white", borderLeft:"3px solid white", borderRadius:"5px", padding:"5px 0 0 5px"}}>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Projects
            </h1>
            <h2>Coming soon</h2>
        </div>
    )
}

/*
<div className="flex flex-col min-h-[100dvh]">
<main className="flex-1">
<section className="w-full py-12 md:py-24 lg:py-32">
<div className="container px-4 md:px-6 space-y-10">
<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
<div>
<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
My Tech Stack
</h1>
<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
Explore the technologies and languages I\'m proficient in.
</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
<div className="flex flex-col items-center space-y-2 cursor-pointer">
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
<RedoDotIcon className="h-8 w-8" />
</div>
<span className="text-sm font-medium">React</span>
</div>
<div className="flex flex-col items-center space-y-2 cursor-pointer">
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
<LeafIcon className="h-8 w-8" />
</div>
<span className="text-sm font-medium">Node.js</span>
</div>
<div className="flex flex-col items-center space-y-2 cursor-pointer">
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
<ArrowUpIcon className="h-8 w-8" />
</div>
<span className="text-sm font-medium">Angular</span>
</div>
<div className="flex flex-col items-center space-y-2 cursor-pointer">
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
<ViewIcon className="h-8 w-8" />
</div>
<span className="text-sm font-medium">Vue.js</span>
</div>
<div className="flex flex-col items-center space-y-2 cursor-pointer">
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
<PyramidIcon className="h-8 w-8" />
</div>
<span className="text-sm font-medium">Python</span>
</div>
<div className="flex flex-col items-center space-y-2 cursor-pointer">
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
<EclipseIcon className="h-8 w-8" />
</div>
<span className="text-sm font-medium">Java</span>
</div>
</div>
</div>
</section>
<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
<div className="container px-4 md:px-6 space-y-10">
<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
<div>
<h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
React Projects
</h2>
<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
Check out the projects I\'ve built using React.
</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
<Card>
<CardHeader>
<img src="/placeholder.svg" width="400" height="200" alt="Project"
className="rounded-t-lg object-cover"
/>
</CardHeader>
<CardContent className="p-4 space-y-2">
<CardTitle>React Dashboard</CardTitle>
<CardDescription>A modern and responsive dashboard built with React.</CardDescription>
<div className="flex justify-end">
<Link href="#"
className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
prefetch={false}
>
View Project
</Link>
</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<img src="/placeholder.svg" width="400" height="200" alt="Project"
className="rounded-t-lg object-cover"
/>
</CardHeader>
<CardContent className="p-4 space-y-2">
<CardTitle>React E-commerce</CardTitle>
<CardDescription>A fully-featured e-commerce platform built with React.</CardDescription>
<div className="flex justify-end">
<Link href="#"
className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
prefetch={false}
>
View Project
</Link>
</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<img src="/placeholder.svg" width="400" height="200" alt="Project"
className="rounded-t-lg object-cover"
/>
</CardHeader>
<CardContent className="p-4 space-y-2">
<CardTitle>React Portfolio</CardTitle>
<CardDescription>A personal portfolio website built with React.</CardDescription>
<div className="flex justify-end">
<Link href="#"
className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
prefetch={false}
>
View Project
</Link>
</div>
</CardContent>
</Card>
</div>
</div>
</section>
<section className="w-full py-12 md:py-24 lg:py-32">
<div className="container px-4 md:px-6 space-y-10">
<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
<div>
<h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
Node.js Projects
</h2>
<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
Check out the projects I\'ve built using Node.js.
</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
<Card>
<CardHeader>
<img src="/placeholder.svg" width="400" height="200" alt="Project"
className="rounded-t-lg object-cover"
/>
</CardHeader>
<CardContent className="p-4 space-y-2">
<CardTitle>Node.js API</CardTitle>
<CardDescription>A RESTful API built with Node.js and Express.</CardDescription>
<div className="flex justify-end">
<Link href="#"
className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
prefetch={false}
>
View Project
</Link>
</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<img src="/placeholder.svg" width="400" height="200" alt="Project"
className="rounded-t-lg object-cover"
/>
</CardHeader>
<CardContent className="p-4 space-y-2">
<CardTitle>Node.js Chat App</CardTitle>
<CardDescription>A real-time chat application built with Node.js and Socket.IO.</CardDescription>
<div className="flex justify-end">
<Link href="#"
className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
prefetch={false}
>
View Project
</Link>
</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<img src="/placeholder.svg" width="400" height="200" alt="Project"
className="rounded-t-lg object-cover"
/>
</CardHeader>
<CardContent className="p-4 space-y-2">
<CardTitle>Node.js CMS</CardTitle>
<CardDescription>A content management system built with Node.js and Express.</CardDescription>
<div className="flex justify-end">
<Link href="#"
className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
prefetch={false}
>
View Project
</Link>
</div>
</CardContent>
</Card>
</div>
</div>
</section>
</main>
<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
<p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 My Portfolio. All rights reserved.</p>
<nav className="sm:ml-auto flex gap-4 sm:gap-6">
<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
Terms of Service
</Link>
<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
Privacy
</Link>
</nav>
</footer>
</div>
)
}

function ArrowUpIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg" width="24" height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m5 12 7-7 7 7" />
<path d="M12 19V5" />
</svg>
)
}


function CodeIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg" width="24" height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<polyline points="16 18 22 12 16 6" />
<polyline points="8 6 2 12 8 18" />
</svg>
)
}


function EclipseIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg" width="24" height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="12" r="10" />
<path d="M12 2a7 7 0 1 0 10 10" />
</svg>
)
}


function LeafIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg" width="24" height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
</svg>
)
}


function PyramidIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg" width="24" height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
<path d="M12 2v20" />
</svg>
)
}


function RedoDotIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg" width="24" height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="17" r="1" />
<path d="M21 7v6h-6" />
<path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
</svg>
)
}


function ViewIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg" width="24" height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
<path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
<path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
<path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
</svg>
)
}*/