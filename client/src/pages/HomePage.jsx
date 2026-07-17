// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
    </div>
  );
}

export default HomePage;