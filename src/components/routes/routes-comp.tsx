import {
    createBrowserRouter,
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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="alfa-campus" element={<RootLayout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="own-design" element={<OwnDesign/>}/>
            <Route path="made-in-alfa" element={<MadeInAlfa/>} />
            <Route path="made-in-alfa/:id" element={<ProductPage/>}/>
            <Route path="own-design/:id" element={<ProductPage/>}/>
            <Route path="contacts" element={<Contacts/>}/>
        </Route>
    )
);

export const RoutesComp = () => {
    return <RouterProvider router={router}/>;
};
