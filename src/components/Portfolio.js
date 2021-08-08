/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import spotify from "../images/spotify-clone.png";
import covidTracker from "../images/covid-19-tracker.png";
import portfolio from "../images/portfolio.png";
import devConnector from "../images/dev-connector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Spotify
  const openPopupboxSpotify = () => {
    const content = (
      <>
        <div className="image-popupbox-container">
          <img
            className="portfolio-image-popupbox"
            src={spotify}
            alt="Spotify Clone Project..."
          />
        </div>
        <h6 className="my-2 font-weight-bold">Spotify-Clone</h6>
        <p>
          Basic Spotify Web App Clone build using React Context-api and Spotify
          Real-time API. Project fetches real user spotify account data using
          axios call. Build is designed using Material-UI & CSS FlexBox.Deployed
          using Firebase.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://spotify-clone-d4f4c.web.app/", "_blank")
          }
        >
          https://spotify-clone-d4f4c.web.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/amrutsabale/spotify-app-clone")
          }
        >
          https://github.com/amrutsabale/spotify-app-clone
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // covid-19-tracker
  const openPopupboxCovidTracker = () => {
    const content = (
      <>
        <div className="image-popupbox-container">
          <img
            className="portfolio-image-popupbox"
            src={covidTracker}
            alt="covid-19-tracker App Project..."
          />
        </div>
        <h6 className="my-2 font-weight-bold">Covid-19 Tracker</h6>
        <p>
          Covid-19 Tracker is ReactJs webapp which tracks Realtime Covid-19
          cases day to day. Build uses realtime Covid-19 Cases API for open
          Covid Disease Data. UI is designed using CSS flexBox & Material-UI.
          Data is compared & displayed using ChartJS. Countries wise cases
          tracking is represented in Map using react-leaflet library.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://covid-19-tracker-5f51a.web.app", "_blank")
          }
        >
          https://covid-19-tracker-5f51a.web.app
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/amrutsabale/covid-19-tracker",
              "_blank"
            )
          }
        >
          https://github.com/amrutsabale/covid-19-tracker
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <div className="image-popupbox-container">
          <img
            className="portfolio-image-popupbox"
            src={portfolio}
            alt="Portfolio Project..."
          />
        </div>
        <h6 className="my-2 font-weight-bold">Portfolio-React </h6>
        <p>
          Portfolio Project implemented using React. Responsive website is
          designed using Bootstrap & fontawesome. Given particles effect & text
          typing effect to create beutiful UI using react-particles-js &
          react-typed libraries. Implemented full-fledge contact form which
          sends email notification using emailjs.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://amrut-sabale-portfolio.web.app", "_blank")
          }
        >
          https://amrut-sabale-portfolio.web.app
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/amrutsabale/portfolio-spa",
              "_blank"
            )
          }
        >
          https://github.com/amrutsabale/portfolio-spa
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // dev-connector
  const openPopupboxDevConnector = () => {
    const content = (
      <>
        <div className="image-popupbox-container">
          <img
            className="portfolio-image-popupbox"
            src={devConnector}
            alt="Dev-connector React Project..."
          />
        </div>
        <h6 className="my-2 font-weight-bold">Dev-Connector </h6>
        <p>
          Build an in depth full stack Social Network Application using Node.js,
          Express, React, Redux and MongoDB along with ES6+.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://dev-connector-spa.herokuapp.com/", "_blank")
          }
        >
          https://dev-connector-spa.herokuapp.com
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/amrutsabale/dev-connector",
              "_blank"
            )
          }
        >
          https://github.com/amrutsabale/dev-connector
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">projects</h1>
        <div className="image-box-wrapper row justify-content-center">
         
          <div
            className="portfolio-image-box"
            onClick={openPopupboxCovidTracker}
          >
            <img
              className="portfolio-image"
              src={covidTracker}
              alt="Covid-19 Tracker Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div
            className="portfolio-image-box"
            onClick={openPopupboxDevConnector}
          >
            <img
              className="portfolio-image"
              src={devConnector}
              alt="Dev-connector React  Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Portfolio React and Material UI Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxSpotify}>
            <img
              className="portfolio-image"
              src={spotify}
              alt="Spotify Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer
        {...{
          titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 500,
        }}
      />
    </div>
  );
};

export default Portfolio;
