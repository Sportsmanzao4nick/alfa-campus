import {Page} from "../page";
import {Outlet} from "react-router-dom";

export const RootLayout = () => {
    return (
        <Page>
            <Outlet/>
        </Page>
    )
}
