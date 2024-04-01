//
import BookContainer, { Sheet } from "cp/book_container";
import BackButton from "cp/back_button";

export default function Skills() {
    return (
        <BookContainer>
            <div sheet={Sheet.left} className="sheet2-left">
                <h1>left</h1>
                <BackButton />
            </div>
            <div sheet={Sheet.right} className="cheet2-right">
                <h1>left</h1>
            </div>
        </BookContainer>)
}