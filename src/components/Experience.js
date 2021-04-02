import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>MY JOURNEY</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-Present</h3>
            <p>
              I am ReactJs Developer in Cognizant Technology Solutions.
              Developed and modernized 3 production ready projects for clients
              using ReactJs. Collaborated with team to design & develop reusable
              components with storybook to be used with the organization’s new
              products. During projects worked on building new components,
              ContextAPI & Redux patterns for state management, React Bootstrap
              for responsive UI design, Jest, Enzyme and React Testing library
              for writing unit tests in ReactJS. Familiar with Jenkins tool for
              CI/CD pipline deployment and SonarQube for Code Quality.Performed
              Automated accessibility testing using cypress-axe in MVPs.Written
              full fledged end to end testcases using Cypress.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2019</h3>
            <p>
              Served as Android Developer Intern. Ayrawat software is Mobile
              application and games development company. The internship was for
              the duration of 3 month.During the tenure, I have hands on work in
              areas Android studio, remote server FTP client, Php and Mysql
              database.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2019</h3>
            <p>
              Graduated Bachelor of Engineering in Computer Science &
              Engineering with CGPA-8.86
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
