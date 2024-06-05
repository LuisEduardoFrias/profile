'use client' // Error components must be Client Components

import Image from "next/image";
import error404 from "../../public/imgs/homero_simpsons_404_edi.webp"
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div>
            <Image src={error404} width={3264} height={3264} alt={"image error 404"} />
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}