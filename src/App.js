import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./pages/Content";
import About from "./pages/About";
import FooterSmall from "./components/FooterSmall";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      {/* <FooterSmall /> */}
    </div>
  );
}

export default App;
