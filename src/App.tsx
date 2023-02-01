import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css'
import Page from "./components/components-for-pages/page/Page";
import MainPage from "./components/main-page/MainPage";
import MadeInAlpha from "./components/made-in-alpha/MadeInAlpha";
import OwnDesign from "./components/own-design/OwnDesign";
import Contacts from "./components/contatcs/Contacts";

function App() {
  return (
    <div className="App">
        <Page>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/madeinalpha" element={<MadeInAlpha/>}/>
            <Route path="/own-design" element={<OwnDesign/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            {/*<Route path="/shopping-cart" element={<ShoppingCart/>}/>*/}
        </Routes>
        </Page>
    </div>
  );
}

export default App;
