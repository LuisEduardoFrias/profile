/** @format */

import Header from "cp/home/header";
import Main from "cp/home/main";
import Footer from "cp/home/footer";
import BookContainer, { Sheet } from "cp/book_container";
import localFont from "next/font/local";
import "st/home.css"

const days_one = localFont({
    src: "../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Home() {
    return (
        <BookContainer>
            <div sheet={Sheet.left} className="sheet-left">
                <Header days_one={days_one} />
                <Footer days_one={days_one} />
            </div>
            <div sheet={Sheet.right} className="cheet-right">
                <Main />
            </div>
        </BookContainer>
    );
}
