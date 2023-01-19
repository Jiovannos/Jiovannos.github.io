import "./App.css";
import Left from "./leftcontent/Left";
import Scene from "./body/Scene";
import Right from "./rightcontent/Right";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Left />
          <Scene />
          <Right />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
