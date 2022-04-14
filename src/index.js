import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//local imports
import "./index.css";
import App from "./App";
import { GithubContextProvider } from "./context.js";
//end local imports

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
