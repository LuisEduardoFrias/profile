//
"use client"

import React, { useState } from 'react';
import BackButton from "cp/back_button";
import Icon from "cp/icon"
import Styles from "st/book_container.module.css";

type BookContainerProps = {
    children:  React.ReactNode;
};

const BookContainer: React.FC<BookContainerProps> = ({ children }) => {
    return (
        <>
            {
                Array.isArray(children) ?
                    (
                        <>
                            {
                                React.Children.map(children, (child, index: number) =>
                                    <article key={index} className={`${index % 2 !== 0 ? Styles.sheetRight : Styles.sheetLeft}`}>
                                        {child || null}
                                    </article>
                                )
                            }
                        </>
                    )
                : <>{children}</>
            }
        </>
    );
}

/*
/////////////
/////////////  Pages
/////////////
*/

type PageProps = {
    children: React.ReactNode[];
};

const Pages: React.FC<PageProps> = ({ children }) => {
    const validate: number = (children.length - (children.length % 2 === 0 ? 2 : 1));

    const [pagesCount, setPagesCount] = useState(0)
    const [subtractAnimation, setSubtractAnimation] = useState(false);
    const [addAnimation, setAddAnimation] = useState(false);

    function handleChangePage(value: number) {
        const newPage = pagesCount + value;
        if (newPage >= 0 && newPage <= validate) {
            if (value === -2) {
                setSubtractAnimation(true);
            } else if (value === 2) {
                setAddAnimation(true);
            }

            setTimeout(() => {
                setPagesCount(newPage);
                setAddAnimation(false);
                setSubtractAnimation(false);
            }, 900)
        }
    }

    return (
        <>
            <div className={`${Styles.sheetLeft} ${subtractAnimation ? Styles.changeLeftPage : null}`}>
                <BackButton />
                <div className={Styles.sheetLeftContainerPage}>
                    {children[pagesCount] || null}
                </div>
                {pagesCount >= 1 &&
                    <IconChangePage handleChange={() => handleChangePage(-2)} className={Styles.back} />}
                <div className={`${Styles.sheetLeftPage} ${addAnimation ? Styles.sheetCloseLeftPage : null}`} ></div>
            </div>
            <div className={`${Styles.sheetRight} ${addAnimation ? Styles.changeRightPage : null}`}>
                <div className={Styles.sheetRightContainerPage}>
                    {children[pagesCount + 1] || null}
                </div>
                {!(pagesCount >= validate) &&
                    <IconChangePage handleChange={() => handleChangePage(2)} className={Styles.next} />}
                <div className={`${Styles.sheetRightPage} ${subtractAnimation ? Styles.sheetCloseRightPage : null}`} ></div>
            </div>
        </>
    );
    return (
        <>
            <div className={`${Styles.sheetLeft} ${subtractAnimation ? Styles.changeLeftPage : null}`}>
                <BackButton />
                {children[pagesCount] || null}
                {pagesCount >= 1 &&
                    <IconChangePage handleChange={() => handleChangePage(-2)} className={Styles.back} />}
                <div className={`${Styles.sheetLeftPage} ${addAnimation ? Styles.sheetCloseLeftPage : null}`} ></div>
            </div>
            <div className={`${Styles.sheetRight} ${addAnimation ? Styles.changeRightPage : null}`}>
                {children[pagesCount + 1] || null}
                {!(pagesCount >= validate) &&
                    <IconChangePage handleChange={() => handleChangePage(2)} className={Styles.next} />}
                <div className={`${Styles.sheetRightPage} ${subtractAnimation ? Styles.sheetCloseRightPage : null}`} ></div>
            </div>
        </>
    );
}

/*
/////////////
/////////////  Icon Change Page
/////////////
*/

type IconChangePageProps = {
    handleChange: () => void,
    className?: string
};

const IconChangePage: React.FC<IconChangePageProps> = ({ handleChange, className }) => {
    return (
        <div onClick={handleChange} className={`${Styles.changePage} ${className}`} >
            <Icon iconName={"auto_stories"} />
            <Icon iconName={"import_contacts"} />
        </div >
    )
}

export default BookContainer;
export { Pages };