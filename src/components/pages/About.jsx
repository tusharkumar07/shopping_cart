import about_bg from "../../assets/img/about_bg.jpg";
import "../../assets/css/about.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="about_container">
          <div className="img">
            <img src={about_bg} alt="" />
          </div>
          <div className="text">
            <h1>Our Story</h1>
            <p>
            CartSwift is your go-to destination for a seamless and enjoyable online shopping experience. We offer a curated selection of high-quality products, ranging from fashion and accessories to home essentials and electronics, all designed to meet your everyday needs. Founded with a passion for making shopping more accessible and convenient, CartSwift combines style, quality, and affordability in every item we offer. Our commitment to excellence and customer satisfaction drives us to continually innovate and improve, ensuring that your shopping journey with us is nothing short of exceptional. Thank you for choosing CartSwift—we're here to serve you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
