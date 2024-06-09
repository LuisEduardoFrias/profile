'use client'
import Image from "next/image";
import error404 from "../../public/imgs/homero_simpsons_404_edi.webp"
import Link from "next/link";
import "st/notfound.css"

export default function NotFoundPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
    <div className="page-not-found" >
      <Image
        style={{ width: "400px", height: "400px" }}
        src={error404}
        width={500}
        height={500}
        alt={"image error 404"}
      />
      <div>
          <h2>Something went wrong!</h2>
          <Link href={"/"} className="link" >Go home</Link>
      </div>
    </div>
  );
}