import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Amrut Sabale</h1>

        <Typed
          className="typed-text"
          strings={[
            "ReactJs Developer",
            "Frontend Software Engineer",
            "Loves JavaScript",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to={"contact"} href="#" className="btn-main-offer">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
