import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//local imports
import "./index.css";
import App from "./App";
import { GithubContextProvider } from "./context.js";

//end local imports
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BrowserRouter>
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </BrowserRouter>
  </StrictMode>
);