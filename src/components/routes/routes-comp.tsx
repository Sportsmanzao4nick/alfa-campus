import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "../../pages/main-page";
import { OwnDesign } from "../../pages/own-design";
import { MadeInAlpha } from "../../pages/made-in-alpha";
import { Contacts } from "../../pages/contatcs";
import { RootLayout } from "./root-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="own-design" element={<OwnDesign />} />
      <Route path="made-in-alpha" element={<MadeInAlpha />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>
  )
);

export const RoutesComp = () => {
  return <RouterProvider router={router} />;
};
