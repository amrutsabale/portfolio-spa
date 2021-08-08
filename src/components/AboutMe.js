import React from "react";
import author from "../me.jpg";
const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading ">about me</h1>
          <p>
            Hello! I am Amrut. I have been developing high-quality webapps for
            over 2 years. I'm a Frontend Software Engineer. Currently living in
            Pune, India.I create responsive websites that are displayed on all
            devices desktops and smartphones.
          </p>
          <p> During the past 2 years of working
            with software development, I've gained insight into a large area of
            Web development as well as system architecture. I've been heavily
            invested in the JavaScript ecosystem and have in-depth knowledge and
            experience with React, Jest, Typescript, HTML5, CSS and more.
            Additionally,I'm doing open-source contributions, writing articles
            on Medium and actively sharing my knowledge on LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
