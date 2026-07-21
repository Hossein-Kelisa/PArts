import "./About.css";
import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutImg.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-left">
        <p className="about-subtitle"> Who We Are</p>
        {/* <h2>Who We Are</h2> */}
        <p className="about-text">
          We are a photography and videography studio dedicated to capturing
          real moments with a modern, elegant style. Every project we create
          tells a story — yours.
        </p>
        <Link to="/about" className="about-link">
          Read more...
        </Link>
      </div>

      <div className="about-right">
        <img src={aboutImg} alt="About PArts studio" />
      </div>
    </section>
  );
}

export default About;