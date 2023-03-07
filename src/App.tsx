import React from "react";
import "./App.css";
import { RoutesComp } from "./components/routes/routes-comp";
import ErrorBoundary from "./components/error-boundary";

export const App = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <RoutesComp />
      </div>
    </ErrorBoundary>
  );
};
