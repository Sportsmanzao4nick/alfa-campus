import Page from "../page";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <Page>
            <Outlet/>
        </Page>
    )
}

export default RootLayout;
