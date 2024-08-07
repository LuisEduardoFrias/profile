import Image from 'next/image'
import profile from "../../../public/imgs/profile.webp"
import logo from "../../../public/imgs/tridente_sc.webp"
import 'st/home/main.css'

export default function Main() {
    return (
        <main className="main-container">
            <Image id="logo" src={logo} priority={true} width={3264} height={2177} alt="logo ico" />
            <Image id="profile" src={profile} priority={true} width={2094} height={2176} alt="Image of profile" />

            <pre>
                <code lang="html" dir="ltr">
                    {'<!DOCTYPE html>\n  <html lang="es">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <title>Artículo sobre Programación</title>\n    </head>\n  <body>\n    <h1>La Importancia de la Programación en la Actualidad</h1>\n    <p>La programación se ha convertido en una habilidad fundamental en el mundo moderno.</p>\n    <p>Con el avance de la tecnología, cada vez más aspectos de nuestra vida cotidiana están influenciados por el código informático.</p>\n    <p>Desde el desarrollo de aplicaciones móviles hasta la automatización de procesos industriales, la programación juega un papel crucial en la sociedad actual.</p>\n    <p>Aprender a programar no solo abre puertas laborales, sino que también estimula el pensamiento lógico y la creatividad.</p>\n  </body>\n</html>'}
                </code>
            </pre>
            <div></div>
        </main>
    );
}
