import './MainPage.css';
import Page from "../../components/page/Page";
import {NavLink, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <Page>
            <div className="mainpage__container">
                <NavLink className="mainpage__component made-in-alpha" to="made-in-alpha">
                    <h3 className="mainpage__header">Сделано в Альфе</h3>
                </NavLink>
                <NavLink className="mainpage__component own-design" to="own-design">
                    <h3 className="mainpage__header">Свой дизайн</h3>
                </NavLink>
                <Outlet/>
            </div>
        </Page>
    )
}

export default MainPage;