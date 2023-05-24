import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { App } from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Router, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { OwnDesign } from "./pages/own-design";
import { MadeInAlfa } from "./pages/made-in-alfa";
import { Contacts } from "./pages/contatcs";
import { RootLayout } from "./components/routes/root-layout";
import { ProductPage } from "./pages/product";
import {RoutesComp} from "./components/routes/routes-comp";

// test('full app rendering/navigating', async () => {
//     render(<App />, {wrapper: BrowserRouter})
//     const user = userEvent.setup();
//     expect(screen.getByText(/a-store/i)).toBeInTheDocument();
//     await user.click(screen.getByText(/made-in-alpha/i))
//     expect(screen.getByText(/Сделано в Альфе/i)).toBeInTheDocument()
// })

// describe('TEST APP', () => {
//     test('Router test', () => {
//         render (
//
//                 <App/>
//
//         );
//         const mainPage = screen.getByTestId('main-page');
//         userEvent.click(mainPage);
//         expect(screen.getByTestId('main-page')).toBeInTheDocument();
//     })
// })
