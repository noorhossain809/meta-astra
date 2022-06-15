import React from "react";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import instagram from "../images/instagram.png";
import sandclock from "../images/sandglass.png";
import favicon from '../images/Favicon.png'

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-6">
                  <a
                     href="https://discord.gg/FqSBgmayhv"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img className="sand-clock" src={sandclock} alt="" />
                     Join the Discord
                  </a>
               </div>
               <div className="col-6 text-end">
                  <a
                     href="https://twitter.com/MetaAstra/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img className="flat-icon" src={twitter} alt="" />
                  </a>
                  <a
                     href="https://discord.com/invite/WE24q2kF"
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
                  <p className="copyright">&copy; Meta Astra, Inc.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
