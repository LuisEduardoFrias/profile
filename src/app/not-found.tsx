'use client'
import Image from "next/image";
import Meteors from 'cp/meteors';
import error404 from "../../public/imgs/homero_simpsons_404_edi.webp";
import Link from "next/link";
import { language } from 'md/language';
import { useSubscribeState } from 'subscribe_state'
import "st/notfound.css";

export default function NotFoundPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [state, dispatch] = useSubscribeState(["language"])

  const title = state.language === language.en ? "Something went wrong!" : "¡Algo salió mal!";
  const btnText = state.language === language.en ? "Go home" : "ve a Home!";

  return (
    <>
      <Meteors />
      <div className="page-not-found" >
        <Image
          priority={true}
          placeholder="blur"
          className="error-404"
          src={error404}
          width={500}
          height={500}
          alt={"image error 404"}
        />
        <div>
          <h2>{title}</h2>
          <Link href={"/"} className="link" >{btnText}</Link>
        </div>
      </div>
    </>
  );
}