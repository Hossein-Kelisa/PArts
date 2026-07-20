import "./Services.css";

const servicesList = [
  {
    id: 1,
    title: "Wedding Photography",
    text: "Capturing your special day with timeless, elegant photos.",
  },
  {
    id: 2,
    title: "Portrait Sessions",
    text: "Professional portraits for individuals, couples, and families.",
  },
  {
    id: 3,
    title: "Event Videography",
    text: "Cinematic video coverage for your events and celebrations.",
  },
  {
    id: 4,
    title: "Commercial Shoots",
    text: "High-quality visuals for brands, products, and businesses.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <p>What We Offer</p>
        <h2>Our Services</h2>
        <span>
          We provide a range of professional photography and videography
          services tailored to your needs.
        </span>
      </div>

      <div className="services-grid">
        {servicesList.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;