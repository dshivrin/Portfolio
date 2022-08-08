import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import Main from "Components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
