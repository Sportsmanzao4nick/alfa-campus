import styles from './index.module.css';
import {Header} from "../header";
import {Footer} from "../footer";
import React from "react";

type Props = {
    children: React.ReactElement
}

export const Page = ({children}: Props) => {
    return (
        <div className={styles.page}>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}