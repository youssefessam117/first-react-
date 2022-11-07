import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from "./componant/navBar/Navbar";
import Home from "./componant/home/Home";
import Portfolio from './componant/PORTFOLIO/Portfolio';
import About from './componant/about/About';
import Contact from "./componant/contact/Contact";
import Footer from "./componant/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Navbar/>
  <Home/>
  <Portfolio/>
  <About/>
  <Contact/>
  <Footer/>
  </>
);
