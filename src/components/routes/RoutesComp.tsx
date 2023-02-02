import {createBrowserRouter, Routes, Route, createRoutesFromElements, RouterProvider,} from "react-router-dom";
import MainPage from "../../pages/main-page/MainPage";
import OwnDesign from "../../pages/own-design/OwnDesign";
import MadeInAlpha from "../../pages/made-in-alpha/MadeInAlpha";
import Contacts from "../../pages/contatcs/Contacts";
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="own-design" element={<OwnDesign/>}/>
            <Route path="made-in-alpha" element={<MadeInAlpha/>}/>
            <Route path="contacts" element={<Contacts/>}/>
        </Route>
    )
)

const RoutesComp = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default RoutesComp;
