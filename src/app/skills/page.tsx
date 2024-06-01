//
import BookContainer, { Pages } from "cp/book_container";
import BackButton from "cp/back_button";
import Keyboard from "cp/keyboard";
import FrontEnd from "cp/skills/front_end";
import BackEnd from "cp/skills/back_end";
import Other from "cp/skills/other";
import Icon from "cp/icon"
import localFont from "next/font/local";
import "st/skills/skill.css"

const days_one = localFont({
    src: "../../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Skills() {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>{"</ Skills >"}</h1>

            <div className={days_one.className} >
                <BookContainer>
                    <Pages>
                        <div className="sheet-container">
                            <BackEnd />
                        </div>
                        <div className="sheet-container">
                            <FrontEnd />
                        </div>
                        <div className="sheet-container">
                            <Other />
                        </div>
                        <div className="sheet-container">
                            <Other2 />
                        </div>
                    </Pages>
                </BookContainer>
            </div>
        </div>
    )
}

function Other2() {
    return (<div style={{ width: "100%", height: "100%", display: "grid", placeContent: "center" }}> <Keyboard /></div >)
}