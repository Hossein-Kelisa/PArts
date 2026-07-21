// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default HomePage;