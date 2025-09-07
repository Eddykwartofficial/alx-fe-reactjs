import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link style={{ backgroundColor: "red" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ backgroundColor: "blue" }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={{ backgroundColor: "green" }} to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link style={{ backgroundColor: "snow" }} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
