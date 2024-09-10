"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Li, { Option } from './li'
import Icon from 'cp/icon'
import { State } from 'md/state'
import MenuList from '../../jsons/manu_list.json'
import Socials from '../../jsons/socials.json'
import PdfSvg from 'svg/pdf_svg';
import RefreshSvg from 'svg/refresh_svg';
import { useSubscribeState } from 'subscribe_state';
import 'st/home/footer.css'

type Social = {
  href: string,
  src: string,
  alt: string,
}

export default function Footer({ days_one }: { days_one: any }) {
  const [{ language }, dispatch] = useSubscribeState(["language"])
  const [downloading, setDownloading] = useState(false);
  const fileDownloadRef = useRef(null);

  function handleDownload(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (downloading) {
      event.preventDefault();
      return;
    }

    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 1700);
  };

  return (
    <footer className="footer-container" >
      <nav className={days_one.className}>
        <ul>
          {MenuList.map((li: Option, i: number) => <Li key={i} {...li} language={language} />)}
        </ul>
      </nav>
      <div>
        <a href={`./profile/${process.env.NEXT_PUBLIC_PATH_CV ?? 'insert environment variable.'}`} className="downloadPdfBtn" onClick={handleDownload}>
          {downloading ?
            /* <Icon iconName="refresh" className="icon-refresh" /> :
            */
            <div className="svg_refresh">
              <RefreshSvg />
            </div> :
            <PdfSvg /> 
          }
          {"CV"}
        </a>
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
