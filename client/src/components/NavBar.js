import React from "react";
// import TopBar from "./TopBar";
import "../css/NavBar.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from '../pages/About';
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Home from "../pages/Home";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to='/' className="site-title">Zhichen Xu "Kevin"</Link>
      <Link to='/About'>About me!</Link>
    </nav>
  );
};
export default NavBar;
