

import Icon from "cp/icon";
import Head from "next/head";

export default function BackButton() {
    return (<>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        </Head>
        <button><Icon>arrow_back</Icon></button></>)
}