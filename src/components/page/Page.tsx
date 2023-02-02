import './Page.css';
import Header from "../header/Header";
import {Footer} from "../footer/Footer";
import {ReactChildren, ReactElement, ReactNode} from "react";

const Page = (props: any) => {
    return(
        <div className='page'>
            <Header/>
            <div>{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Page;