"use client"

import { useState } from 'react'
import Image from 'next/image'
import Li, { Option } from './li'
import Icon from 'cp/icon'
import MenuList from '../../jsons/manu_list.json'
import Socials from '../../jsons/socials.json'
import 'st/home/footer.css'

type Social = {
    href: string,
    src: string,
    alt: string,
}

export default function Footer({ days_one }: { days_one: any }) {
    const [downloading, setDownloading] = useState(false);

    function handleDownload() {
        setDownloading(true);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = '/luis_cv.pdf'; 
        downloadLink.download = 'luis_cv.pdf';
        downloadLink.click();
        
        setTimeout(() => {
            setDownloading(false);
        }, 2000);
    };

    return (
        <footer className="footer-container" >
            <nav className={days_one.className}>
                <ul>
                    {MenuList.map((li: Option, i: number) => <Li key={i} {...li} />)}
                </ul>
            </nav>
            <div>
                <button className="downloadPdfBtn" disabled={downloading} onClick={handleDownload}>
                    {downloading ? 
                        <Icon iconName="refresh" className="icon-refresh" /> :
                        <Image src={"/imgs/pdf.webp"} width={24} height={24} alt={"cv pdf icon"} />
                    }
                    {"CV"}
                </button>
                <div>
                    {Socials.map((social: Social, i: number) =>
                        <a key={i} href={social.href} target="_blank">
                            <Image src={social.src} width={24} height={24} alt={social.alt} />
                        </a >)
                    }
                </div>
            </div>
        </footer >
    );
}
