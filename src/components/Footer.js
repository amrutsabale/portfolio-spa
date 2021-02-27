/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

const Footer = () => {
  const fooerNavClass = "footer-nav";
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Moscow Main st 2020 office #223</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+7(960)555-5555</a>
            </div>
            <div className="d-flex">
              <p>8020coding@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className={fooerNavClass}>Home</a>
                <br />
                <a className={fooerNavClass}>About me</a>
                <br />
                <a className={fooerNavClass}>Services</a>
              </div>
              <div className="col">
                <a className={fooerNavClass}>Experience</a>
                <br />
                <a className={fooerNavClass}>Portfolio</a>
                <br />
                <a className={fooerNavClass}>Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <LinkedinShareButton
              url={"https://www.youtube.com/8020coding"}
              title={"ReactJs Developer"}
              hashtag="#javascript"
            >
              <LinkedinIcon className="mx-3" size={36} />
            </LinkedinShareButton>
            <TwitterShareButton
              url={"https://www.youtube.com/8020coding"}
              quote={"ReactJs Developer"}
              hashtag="#javascript"
            >
              <TwitterIcon className="mx-3" size={36} />
            </TwitterShareButton>
            <FacebookShareButton
              url={"https://www.youtube.com/8020coding"}
              quote={"ReactJs Developer"}
              hashtag="#javascript"
            >
              <FacebookIcon className="mx-3" size={36} />
            </FacebookShareButton>
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
