import Page from "../page/Page";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <Page>
            <Outlet/>
        </Page>

    )
}

export default RootLayout;
