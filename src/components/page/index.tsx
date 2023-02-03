import styles from './index.module.css';
import {Header} from "../header";
import {Footer} from "../footer";
import React, {JSXElementConstructor} from "react";

type Key = string | number

interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
}

const Page = (props: any) => {
    console.log(props)
    return (
        <div className={styles.page}>
            <Header/>
            <div>{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Page;