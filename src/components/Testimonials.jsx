import "./Testimonials.scss";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image3.jpg";
import Image3 from "../assets/image2.jpg";
import Image4 from "../assets/image4.jpg";
import { ReactComponent as Star } from "../assets/star.svg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <section className="testimonials-wrap">
          <p className="heading">What people say about us !</p>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image1} alt="Customer" />
              </div>
              <p className="name">Natali</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />               
              </span>
              <div className="text">
              I liked almost everything, but there is no limit to perfection,
              I give you 4 stars so that there is an incentive for improvement!
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image2} alt="Customer" />
              </div>
              <p className="name">Adam</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />               
              </span>
              <div className="text">
              The pizza had cow cheese, it was terrible!!! 
             Because I’m natural a vegan! And yes, I already know that I confused with restaurant.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image3} alt="Customer" />
              </div>
              <p className="name">Just a boy</p>
              <span className="stars">
                <Star />              
              </span>
              <div className="text">
              My brother didn’t notice me at all while he was eating pasta-salad with his new girlfriend.
              No one played with me for an hour!
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image4} alt="Customer" />
              </div>
              <p className="name">Kimiko</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              The coffee was cold as an iceberg. And the dessert was hard as a rock,
              I almost broke my teeth. Accidentally rated with five stars.
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
