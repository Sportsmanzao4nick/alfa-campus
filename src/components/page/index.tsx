import styles from './index.module.css';
import {Header} from "../header";
import {Footer} from "../footer";

const Page = (props: any) => {
    return(
        <div className={styles.page}>
            <Header/>
            <div>{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Page;