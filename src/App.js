import "./App.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 900 } },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <ContactMe />
    </>
  );
}

export default App;
