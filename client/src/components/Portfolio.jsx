import { Link } from "react-router-dom";
import "./Portfolio.css";
import img1 from "../assets/portfolio1.jpg";
import img2 from "../assets/portfolio2.jpg";
import img3 from "../assets/portfolio3.jpg";
import img4 from "../assets/portfolio4.jpg";

const portfolioItems = [
  {
    id: 1,
    image: img1,
    category: "Wedding",
    title: "Golden Day",
  },
  {
    id: 2,
    image: img2,
    category: "Portrait",
    title: "Sarah",
  },
  {
    id: 3,
    image: img3,
    category: "Event",
    title: "Music Night",
  },
  {
    id: 4,
    image: img4,
    category: "Corporate",
    title: "Business Meeting",
  },
];

function Portfolio() {
  return (
    <section className="portfolio">

      <div className="portfolio-header">
        <p>Latest Work</p>

        {/* <h2>Portfolio</h2> */}

        <span>
          Discover a selection of our latest photography and videography projects.
        </span>
      </div>

      <div className="portfolio-grid">

        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>

            <div className="portfolio-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="portfolio-content">
              <small>{item.category}</small>
              {/* <h3>{item.title}</h3> */}
            </div>

          </div>
        ))}

      </div>

      <div className="portfolio-button">
        <Link to="/portfolio">
          View more...!
        </Link>
      </div>

    </section>
  );
}

export default Portfolio;