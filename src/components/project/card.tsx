import React, { ReactNode } from 'react' 
import Image from 'next/image'
import 'st/project/card.css'

export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="card-container">
            {children}
        </div>
    )
}

export function CardHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="card-header-container">
            {children}
        </div>
    )
}

export function CardTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="card-title-container">
            {children}
        </div>
    )
}

export function CardTegnologys({tegnologys}:{ tegnologys: string[]}) {
    return (
        <div className="card-tegnologys-container">
            {tegnologys.map((img:string, index:number) => 
                <Image key={index} src={img} width={24} height={24} alt='icon' />
            )}
        </div>
    )
}

export function CardContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="card-content-container">
            {children}
        </div>
    )
}

export function CardDescription({ children }: { children: React.ReactNode }) {
    return (
        <div className="card-description-container">
            {children}
        </div>
    )
}

export function CardImages({ children }: { children: React.ReactNode }) {
    return (
        <div className="card-images-container">
            {children}
        </div>
    )
}