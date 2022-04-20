
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//local imports
import "./index.css";
import App from "./App";
import { GithubContextProvider } from "./context.js";
import { Auth0Provider } from "@auth0/auth0-react";

//end local imports
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
    <Auth0Provider
      domain="dev-ibo9-nit.us.auth0.com"
      clientId="Y1mGVHfJXxXujqZ8Yvs7uprTZds9NgsG"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <BrowserRouter>
        <GithubContextProvider>
          <App />
        </GithubContextProvider>
      </BrowserRouter>
    </Auth0Provider>
);
