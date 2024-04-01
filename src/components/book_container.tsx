//
import { ReactElement, Children } from 'react';
import Styles from "st/book_container.module.css";

export enum Sheet {
    left = 0,
    right = 1
}

export default function BookContainer({ children }: { children: ReactElement }) {
    return (
        <div className={Styles.backContainerHome}>
            <div className={Styles.containerHome}>
                {Children.map(children, child => {
                    if (child.props.sheet == Sheet.left) {
                        return (
                            <div className={Styles.sheetLeft}>
                                {child}
                            </div>)
                    } else if (child.props.sheet == Sheet.right) {
                        return (
                            <div className={Styles.sheetRight}>
                                {child}
                            </div>)
                    }
                })}
            </div>
        </div>)
}