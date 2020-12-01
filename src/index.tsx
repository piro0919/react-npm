import React, { StrictMode } from "react";
import { hydrate, render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Containers from "containers";
import "ress";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { NodePackageManagerProvider } from "contexts/NodePackageManagerContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const app = (
    <StrictMode>
      <NodePackageManagerProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Containers />
        </Router>
      </NodePackageManagerProvider>
    </StrictMode>
  );

  if (rootElement.hasChildNodes()) {
    hydrate(app, rootElement);
  } else {
    render(app, rootElement);
  }

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
