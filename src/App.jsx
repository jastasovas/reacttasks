import logo from "./logo.svg";
import "./App.css";
import Bala from "./Components/Bala.jsx";
import Tvenkinys from "./Components/Tvenkinys.jsx";
import Pasaulis from "./Components/Pasaulis.jsx";
import { seaPlaners } from "./data.js";
import Gyventojai from "./Components/Gyventojai.jsx";
import Vandenynas from "./Components/Vandenynas.jsx";

function App() {
  return (
    <div className="App">
      <Bala />
      <Tvenkinys />
      <Pasaulis seaPlaners={seaPlaners} color="red" />
      <Vandenynas seaPlaners={seaPlaners} />
    </div>
  );
}

export default App;
