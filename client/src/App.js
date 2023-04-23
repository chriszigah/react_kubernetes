import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Link to="/fib">Fib Calculator 7</Link>
          <br />
          <Link to="/otherpage">Other Page</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
