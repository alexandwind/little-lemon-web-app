import "./HeroSection.scss";
import HeroImage from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <section className="hero-section-wrap">
          <div className="text-content">
            <h1 className="title">Little Lemon</h1>
            <h3 className="sup-script">Chicago</h3>
            <p className="desc">
            Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
            </p>
            <Link className="cta" to="/reservation">
              Reserve a table
            </Link>
          </div>
          <div className="image-wrap">
            <img src={HeroImage} alt="Restaurant Food Platter" loading="lazy" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
