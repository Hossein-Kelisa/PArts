import "./ContactInfo.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">

        {/* Contact */}
        <div className="contact-info-item">
          <div className="contact-info-title">
            <FaPhoneAlt />
            <h3>Contact</h3>
          </div>

          <div className="contact-info-line"></div>

          <div className="contact-info-row">
            <FaPhoneAlt />
            <p>+31 6 1234 5678</p>
          </div>

          <div className="contact-info-row">
            <FaEnvelope />
            <p>info@partsstudio.com</p>
          </div>

          <div className="contact-info-row">
            <FaWhatsapp />
            <p>+31 6 1234 5678</p>
          </div>
        </div>

        {/* Visit */}
        <div className="contact-info-item">
          <div className="contact-info-title">
            <FaMapMarkerAlt />
            <h3>Visit Us</h3>
          </div>

          <div className="contact-info-line"></div>

          <div className="contact-info-row">
            <FaMapMarkerAlt />
            <p>Leiden, Netherlands</p>
          </div>

          <div className="contact-info-row">
            <FaClock />
            <div>
              <p>Monday – Saturday</p>
              <small>09:00 – 18:00</small>
            </div>
          </div>
        </div>

        {/* Follow */}
        <div className="contact-info-item">
          <div className="contact-info-title">
            <FaInstagram />
            <h3>Follow Us</h3>
          </div>

          <div className="contact-info-line"></div>

          <div className="contact-info-row">
            <FaInstagram />
            <p>@partsstudio</p>
          </div>

          <div className="contact-info-row">
            <FaFacebookF />
            <p>/partsstudio</p>
          </div>

          <div className="contact-info-row">
            <FaWhatsapp />
            <p>WhatsApp</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactInfo;