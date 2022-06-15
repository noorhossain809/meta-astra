import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import instagram from "../images/instagram.png";
import Svg from "./svg/Svg";

const Navigration = () => {
   return (
      <nav id="navigration" className="navbar navbar-expand-lg fixed-top">
         <div className="container">
            <Link className="navbar-brand" to="/">
               <Svg />
               {/* <img className="img-fluid" src={logo} alt="" /> */}
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarText"
               aria-controls="navbarText"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <img className="hamburger" src={hamburger} alt="" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
               <ul className="navbar-nav mx-auto ">
                  <li className="nav-item">
                     <Link className="link" to="">
                        ABOUT US
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="">
                        TEASER
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/faq">
                        FAQ
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/team">
                        TEAM
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/coming-soon">
                        COMING SOON
                     </Link>
                  </li>
                  <li className="nav-item social-links">
                     <a
                        href="https://twitter.com/MetaAstra/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img className="flat-icon" src={twitter} alt="" />
                     </a>
                     <a
                        href="https://discord.com/invite/FqSBgmayhv"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img className="flat-icon" src={discord} alt="" />
                     </a>
                     <a
                        href="https://www.instagram.com/metaastra_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img className="flat-icon" src={instagram} alt="" />
                     </a>
                  </li>
               </ul>
               <a href="https://discord.gg/FqSBgmayhv"
               target="_blank"
               rel="noopener noreferrer"
               >
               <button className="nav-btn navbar-text">CONTACT</button>
               </a>
            </div>
         </div>
      </nav>
   );
};

export default Navigration;
