import {
    createHashRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import {MainPage} from "../../pages/main-page";
import {OwnDesign} from "../../pages/own-design";
import {MadeInAlfa} from "../../pages/made-in-alfa";
import {Contacts} from "../../pages/contatcs";
import {RootLayout} from "./root-layout";
import {ProductPage} from "../../pages/product";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/alfa-campus" element={<RootLayout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="own-design" element={<OwnDesign/>}/>
            <Route path="made-in-alfa" element={<MadeInAlfa/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="product/:id" element={<ProductPage/>}/>
        </Route>
    )
);

export const RoutesComp = () => {
    return <RouterProvider router={router}/>;
};
