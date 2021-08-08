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
        <div className="row justify-content-center">

          <div className="col-lg-6 col-md-12 col-sm-12 align-items-center my-3">
            <div className="row justify-content-center">
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
        </div>
        <div className="footer-end-text justify-content-center">
          <p className="pt-3 text-center">
            Year {new Date().getFullYear()}&nbsp;Amrut Sabale
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
