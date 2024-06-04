'use client' // Error components must be Client Components

import Image from "next/image";
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div>
            <Image src={"/images/homero_simpsons_404_edi.webp"} width={"100"} height={"100"} alt={"image error 404"} />
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