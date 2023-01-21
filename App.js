import "./App.css";
import Left from "./leftcontent/Left";
import Scene from "./body/Scene";
import Right from "./rightcontent/Right";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <div>
            <Left />
            <Scene />
            <Right />
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
