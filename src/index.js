import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>The weather in your city</h1>
      <WeatherSearch />
    </div>
  </StrictMode>
);
