import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages for each service
import Birthday from "./pages/Birthday";
import Anniversary from "./pages/Anniversary";
import Camping from "./pages/Camping";
import GameNight from "./pages/GameNight";
import Party from "./pages/Party";
import Wedding from "./pages/Wedding";

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbarFooter = location.pathname === "/";

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>{children}</Routes>
      {showNavbarFooter && <Footer />}
      <Toaster />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <About />
              <Contact />
            </>
          }
        />
        {/* Event Pages */}
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/game-night" element={<GameNight />} />
        <Route path="/party" element={<Party />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/contact" element={<Contact />} />
      </Layout>
    </Router>
  );
};

export default App;
