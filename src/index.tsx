import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameOfLife from "./Components/Hobbies/GOL/GOL";
import Main from "./Components/Main/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//React.StrictMode makes the app load twice in dev mode. Restore before production
root.render(
  // <React.StrictMode>
  //  <App/>
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="home" element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="gol" element={<GameOfLife />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
