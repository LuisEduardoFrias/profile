//
import Header from "cp/home/header";
import Main from "cp/home/main";
import Footer from "cp/home/footer";
import Icon from "cp/icon";
import BookContainer from "cp/book_container";
import localFont from "next/font/local";
import "st/home.css"

const days_one = localFont({
    src: "../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Home() {
    return (
        <BookContainer>
            <div className="sheet-left">
                <Icon iconName="swipe_up" className="swipe_up" />
                <Header days_one={days_one} />
                <Footer days_one={days_one} />
            </div>
            <div className="sheet-right">
                <Main />
            </div>
        </BookContainer>
    );
}
