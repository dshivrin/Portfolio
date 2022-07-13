import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import Main from "Components/Main/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Outlet/>
    </div>
  );
}

export default App;
