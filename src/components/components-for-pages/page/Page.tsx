import './Page.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";

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