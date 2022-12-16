import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import { HookUseContext } from "./components/HookUseContext";

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          {/* inicio navbar */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
          {/* fim navbar */}

          {/* inicio setup rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* fim setup rotas */}
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
