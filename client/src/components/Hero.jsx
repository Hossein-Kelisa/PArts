import "./Hero.css";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        {/* <p className="hero-subtitle">
          Photography & Videography Studio
        </p> */}

        <h1>
          Capturing
          <br />
          Timeless
          <br />
          Moments
        </h1>

        <p className="hero-text">
          Elegant photography and cinematic storytelling for weddings,
          events and businesses.
        </p>

        <div className="hero-buttons">
          <button className="hero-button1">
            Book Now
          </button>

          <button className="hero-button2">
            View Portfolio
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-img">
          <img src={hero} alt="Photography" />
        </div>

      </div>

    </section>
  );
}

export default Hero;