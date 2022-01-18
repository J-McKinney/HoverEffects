import ShinyEffect from "./components/ShinyEffect.js";
import logo from "./logo.svg";
import Styles from "./App.module.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className={Styles.hoverText} href="/">
          Hover Effect
        </a>
        <ShinyEffect />
      </header>
    </div>
  );
}

export default App;
