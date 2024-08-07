//
'use client'
import BackButton from 'cp/back_button'
import Meteors from 'cp/meteors'
import { language } from 'md/language'
import { State } from 'md/state'
import { useSubscribeState } from 'subscribe_state'
import "st/about_me/about_me.css"

export default function AboutMe() {
  const [state, dispatch] = useSubscribeState(["language"])

  const text = {
    subtitle: state.language === language.es ? "Programador FrontEnd y BackEnd"
      : "Programador FrontEnd y BackEnd",
    phone: state.language === language.es ? "Teléfono" : "Phone number",
    address: state.language === language.es ? "República Dominicana" :
      "Dominican Republic",
    addressTitle: state.language === language.es ? "Residencia" :
      "Address",
    from: state.language === language.es ? "Residencia: " : "Address",
    text1: state.language === language.es ? `Soy programador con alta
    experiencia en el desarrollo de aplicaciones, especializado en el lenguaje
    C# y la librería React tanto con vanillaJs como con TypeScript, NextJs y
    Express.` : `I am a programmer with extensive experience in application
    development, specialized in the C# language and the React library with
    vanillaJs, TypeScript, NextJs and Express.`,
    text2: state.language === language.es ? `Experiencia en el mundo de las
    bases de datos con Microsoft SQL Server usando T-SQL y Oracle DB usando
    PL/SQL.` : `I have Experience in the world of databases with Microsoft SQL
    Server using T-SQL and Oracle DB using PL/SQL.`,
    //     text3: state.language === language.es ? `Actualmente estoy sumergiéndome en
    //     Python.` : "------"
  }

  return (
    <>
      <Meteors />
      <BackButton />
      <div className="about-me">
        <div className="profile-image">
          <img src="./imgs/profile.webp" alt="Imagen de Luis Eduardo" />
        </div>
        <h1>Luis Eduardo Frias</h1>
        <h2>{text.subtitle}</h2>
        <p>
          <strong>{text.phone}:</strong> 8492280058
        </p>
        <p>
          <strong>{'GitHub: '}</strong>
          <a href="https://www.github.luiseduardofrias.io">
            https://www.github.luiseduardofrias.io
          </a>
        </p>
        <p>
          <strong>{'LinkedIn: '}</strong>
          <a href="https://www.linkedin.com">https://www.linkedin.com</a>
        </p>
        <p>
          <strong>{'Portafolio: '}</strong>
          <a href="https://www.github.luiseduardofrias.io/porfolio">
            https://www.github.luiseduardofrias.io/porfolio
          </a>
        </p>
        <p>
          <strong>{`${text.addressTitle}: `}</strong>{text.address}
        </p>
        <p>{text.text1}</p>
        <p>{text.text2}</p>
        {// <p>{text.text3}</p>
        }
      </div>
    </>
  )
}

/*
        <h1>https://iconos8.es/icons/set/skills--static--c-0093fa</h1>
        <h1>https://fonts.google.com/icons?icon.query=book</h1>
        <h1>https://www.freepik.es/icono/git_10042194#fromView=search&page=3&position=1&uuid=259880dc-8af5-4d0f-99a0-d1412414767b</h1>
        <h1>https://techicons.dev/icons/angular</h1>
        <h1>https://www.instagram.com/reel/C6tpUhCtWqZ/?igsh=cnhqOG93ZXd1YjR3</h1>
        */
/*

Como evitar verbosidad y reutilizar tipos gracias a los utility types
Funciones mucho mejor documentadas y robustas gracias a los const type parameters
Mejorar el narrowing y el tipado de tus objetos con satisfies

UDAEFFNU0122
UDEAFFDS0124
UDEAFNULP0424
*/
