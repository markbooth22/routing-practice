import './App.css';
import { Router } from "@reach/router"
import Home from "./components/Home"
import Style from "./components/Style"
import Number from "./components/Number"
import Word from "./components/Word"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Home path="/home" />
        <Word path="/:id" />
        <Style path="/:word/:font/:bground" />
      </Router>
    </div>
  );
}

export default App;
