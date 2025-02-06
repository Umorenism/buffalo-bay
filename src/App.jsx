import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { Footer } from "./component/Footer";

import ProjectDes from "./pages/ProjectDes";
import ProjectWork from "./pages/Project";
import Contact from "./pages/Contact";

import AboutFlow from "./pages/AboutFlow";
import CompanyServices from "./pages/CompanyServices";

import ContactService from "./pages/ContactService";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            index
            element={
              <>
                <Header
                  title="Buffalo & BAY"
                  desc="Strength and Splendor"
                  bgColor="bg-transparent"
                  textColor="text-white"
                />
                <Home />
              </>
            }
          />
          <Route
            path="/projectdes"
            element={
              <>
                <Header
                  title="Buffalo & BAY"
                  desc="Strength and Splendor"
                  bgColor="bg-transparent"
                  textColor="text-white"
                />
                <ProjectDes />
              </>
            }
          />
          <Route
            path="/pro-ject"
            element={
              <>
                <Header
                  title="Buffalo & BAY"
                  desc="Strength and Splendor"
                  bgColor="bg-white"
                  textColor="text-[#6D142A]"
                />
                <ProjectWork />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Header
                  title="Buffalo & BAY"
                  desc="Strength and Splendor"
                  bgColor="bg-transparent"
                  textColor="text-white"
                />
                <AboutFlow />
              </>
            }
          />
          <Route
            path="/service"
            element={
              <>
                <Header
                  title="Buffalo & BAY"
                  desc="Strength and Splendor"
                  bgColor="bg-white"
                  textColor="text-black"
                />
                <CompanyServices />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Header
                  title="Buffalo & BAY"
                  desc="Strength and Splendor"
                  bgColor="bg-transparent"
                  textColor="text-white"
                />
                <ContactService />
              </>
            }
          />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </>
  );
};

export default App;
