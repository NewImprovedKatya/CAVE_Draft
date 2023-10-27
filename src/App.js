import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import background from "./CaveBG.png";
import Navbar from "./components/Navbar.js";

export default function App() {
  return (
    <div className="App">
      <img className="demo-bg" src={background} alt="Cave illustration" />
      <div className="navbar-container navbar-animated">
  <Navbar />
</div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
