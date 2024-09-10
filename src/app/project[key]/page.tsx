"use client"
import React, { ReactElement } from 'react'
import projects from '../../jsons/projects.json'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from 'md/project'
import GitHubSvg from 'svg/github_svg';
import BookContainer, { Pages } from 'cp/book_container'
import BackButton from 'cp/back_button'
import Keyboard from 'cp/keyboard'
import Meteors from 'cp/meteors'
import Icon from 'cp/icon'
import localFont from 'next/font/local'
import { language } from 'md/language'
import { State } from 'md/state'
import { Card, CardHeader, CardTitle, CardTegnologys, CardContent, CardDescription, CardImages } from 'cp/project/card'
import { useSubscribeState } from 'subscribe_state'
import 'st/project/project.css'

const days_one = localFont({
  src: "../../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Projects() {
  const [state, dispatch] = useSubscribeState(["language"])
  const title = state.language === language.en ? "</Projects>" : "Proyectos";
  return (
    <div className="project-container" >
      <Meteors />
      <header>
      <BackButton />
      <h1 className={`${days_one.className} project-title`}>{title}</h1>
        <nav>
          <ul>
            <li>ah</li>
          </ul>
        </nav>
      </header>
      <main>
        {projects.map((element: Project, index: number) =>
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <h2>{element.title}</h2>
              </CardTitle>
              <a href={element.repo} target="_blank">
                <GitHubSvg />
              </a>
              <CardTegnologys tegnologys={element.tegnologys} />
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p>{element.description}</p>
              </CardDescription>
              <CardImages>
                {element.imgs.map((img: string, index: number) =>
                  <Image key={index} className="card-images-img" src={img} width={1000} height={1000} alt={`Image of project ${element.title}`} />
                )}
              </CardImages>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}