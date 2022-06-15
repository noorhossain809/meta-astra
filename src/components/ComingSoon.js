import React from "react";
import logo from "../images/logo.png";
import envelope from "../images/envelope.png";
import rocket from "../images/rocket.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import instagram from "../images/instagram.png";
import { Link } from "react-router-dom";

const ComingSoon = () => {
   return (
      <div className="coming-soon">
         <div className="container">
            <div className="text-box text-center">
               <Link className="logo" to="/">
                  <img className="img-fluid mb-4" src={logo} alt="" />
               </Link>
               <br />
               <img className="img-fluid" src={rocket} alt="" />
               <h4>WE'RE STILL</h4>
               <h1>Cooking Our Website</h1>
               <h5>We are going to launch our website very soon</h5>
               <h3>Stay Tuned!</h3>
               <div className="notify-box">
                  <div className="input-group">
                     <span className="input-group-text">
                        <img className="img-fluid" src={envelope} alt="" />
                     </span>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email address here"
                     />
                  </div>

                  <button className="notify-btn">Notify Me</button>
               </div>
               <span>We'll notify you once, We go live</span>
               <div className="socials">
                  <p>Follow us on Social Media</p>
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
               </div>
            </div>
         </div>
      </div>
   );
};

export default ComingSoon;
