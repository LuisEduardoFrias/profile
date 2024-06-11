"use client"

import { useState } from 'react'
import Image from 'next/image'
import Li, { Option } from './li'
import Icon from 'cp/icon'
import MenuList from '../../jsons/manu_list.json'
import Socials from '../../jsons/socials.json'
import PdfSvg from '../../svg/pdf_svg'; 
import { useSubscribeState } from '@/subscribe_state/index'
import 'st/home/footer.css'

type Social = {
    href: string,
    src: string,
    alt: string,
}

export default function Footer({ days_one }: { days_one: any }) {
    const [{language}, dispatch] = useSubscribeState(["language"])
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
                    {MenuList.map((li: Option, i: number) => <Li key={i} {...{...li, language: language}} />)}
                </ul>
            </nav>
            <div>
                <button className="downloadPdfBtn" disabled={downloading} onClick={handleDownload}>
                    {downloading ? 
                        <Icon iconName="refresh" className="icon-refresh" /> :
                        <PdfSvg/>
                    }
                    {"CV"}
                </button>
                <div className="social-footer" >
                    {Socials.map((social: Social, i: number) => {
                            const DynamicComponent = require(`../../svg/${social.src}.tsx`).default;
                           
                            return (
                                <a key={i} href={social.href} target="_blank">
                                    <DynamicComponent />
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </footer >
    );
}
