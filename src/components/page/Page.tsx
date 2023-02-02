import './Page.css';
import {Header} from "../header";
import {Footer} from "../footer";

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