import ShinyEffect from "./components/ShinyEffect/ShinyEffect.js";
// import Shine from "./components/Shine/Shine";
import logo from "./logo.svg";
import Styles from "./App.module.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className={Styles.hoverText} href="/">
          Hover Text Effect
        </a>
        <ShinyEffect />
        {/* <Shine /> */}
      </header>
    </div>
  );
}

export default App;
