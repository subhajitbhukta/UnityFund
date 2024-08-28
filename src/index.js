import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Statistics from "./components/Statistics/Statistics";
import Marque from "./components/Marque/Marque";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import Campaings from "./components/Campaings/Campaings";
import Testimonial2 from "./components/Testimonial2/Testimonial2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home />
    <Body/>
    <Statistics/>
    <Marque/>
    <Testimonial/>
    <Campaings/>
    <Testimonial2/>
    <Footer/>
  </React.StrictMode>
);
