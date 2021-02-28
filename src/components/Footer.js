/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 align-items-center ">
            <div className="d-flex">
              <p>Pune,Maharashtra,India.</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+918806042730</a>
            </div>
            <div className="d-flex">
              <p>samrut355@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 align-items-center my-3">
            <FontAwesomeIcon
              onClick={() =>
                window.open("https://www.linkedin.com/in/amrut-sabale/")
              }
              className="footer-icon"
              icon={faLinkedin}
              size="2x"
            />
            <FontAwesomeIcon
              onClick={() => window.open("https://twitter.com/amrutsabale")}
              className="footer-icon"
              icon={faTwitter}
              size="2x"
            />
            <FontAwesomeIcon
              onClick={() => window.open("https://github.com/amrutsabale")}
              className="footer-icon"
              icon={faGithub}
              size="2x"
            />
            <FontAwesomeIcon
              onClick={() => window.open("https://amrutsabale.medium.com/")}
              className="footer-icon"
              icon={faMedium}
              size="2x"
            />
          </div>
        </div>
        <p className="pt-3 text-center">
          Year {new Date().getFullYear()}&nbsp;Amrut Sabale | Made with ❤️ in
          India
        </p>
      </div>
    </div>
  );
};

export default Footer;
