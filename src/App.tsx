import React from "react";
import "./App.css";
import { RoutesComp } from "./components/routes/routes-comp";
import { LocationDisplay } from "./components/routes/location-display";

export const App = () => {
  return (
    <div className="App">
      <RoutesComp />
      {/*<LocationDisplay/>*/}
    </div>
  );
};
