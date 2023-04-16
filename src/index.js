import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CurrentInfo from "./CurrentInfo";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";
import "./CurrentInfo.css";

import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <CurrentInfo defaultCity="Kyiv" />
        </div>
        <Footer />
      </div>
    </div>
  </StrictMode>
);
