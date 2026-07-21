import "./ContactForm.css";
import contactImage from "../assets/hero.jpg";

function Contact() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">

        {/* Left */}
        <div className="contact-form-image">
          <img
            src={contactImage}
            alt="Photography Contact"
          />
        </div>

        {/* Right */}
        <div className="contact-form-content">

          {/* <span className="contact-form-subtitle">
            CONTACT US
          </span> */}

          <h2>
            Let's Create Something Beautiful Together
          </h2>

          <p>
            Whether it's your wedding, event, portrait or business,
            we'd love to hear your story.
          </p>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your project..."
            ></textarea>

            <button>
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;