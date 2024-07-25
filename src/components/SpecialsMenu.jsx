import Fish from "../assets/fish.jpg";
import LemonDesert from "../assets/dessert.jpg";
import Pizza from "../assets/pizza.jpg";
import { ReactComponent as ScooterSVG } from "../assets/scooter.svg";
import { Link } from "react-router-dom";
import "./SpecialsMenu.scss";
const SpecialsMenu = () => {
  return (
    <section className="special-menu">
      <div className="container">
        <section className="special-menu-wrap">
          <div className="heading">
            <p className="title">This week specials!</p>
            <Link className="cta" to="/404">
              Online Menu
            </Link>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Fish} alt="Fish Grilled" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Gilt-head fish Grilled</p>
                  <p className="price">35.79$</p>
                </div>
                <p className="desc">
                Grilled fish that has been cooked with vegetables
                 and seasoned with olive oil.
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Pizza} alt="Pizza" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Chicago Style Pizza</p>
                  <p className="price">22.79 $</p>
                </div>
                <p className="desc">
                Pizza with peppers, olives, 
                our Chicago style fota cheese and salami pepperoni.
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={LemonDesert} alt="Lemon Desert" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Lemon eclair</p>
                  <p className="price">12.79$</p>
                </div>
                <p className="desc">
                This comes straight from grandma's recipe book, 
                every last ingredient has been sourced.
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SpecialsMenu;
