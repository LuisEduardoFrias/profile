"use client"
import Header from "cp/home/header";
import Main from "cp/home/main";
import Footer from "cp/home/footer";
import Icon from "cp/icon";
import BookContainer from "cp/book_container";
import SwipeUpSvg from 'svg/swipe_up_svg';
import localFont from "next/font/local";
import "st/home.css"

const days_one = localFont({
  src: "../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Home() {
  return (
    <BookContainer>
      <div className="sheet-left">
        <div className="swipe_up">
          <SwipeUpSvg />
        </div>
        <Header days_one={days_one} />
        <Footer days_one={days_one} />
      </div>
      <div className="sheet-right">
        <Main />
      </div>
    </BookContainer>
  );
}
