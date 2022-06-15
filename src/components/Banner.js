import React from "react";
import frame1 from "../images/frame1.png";
import frame2 from "../images/frame2.png";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="text-box">
          <h1>
            <span>9,999</span> UNIQUE NFTs of <br /> <span>100 Unique</span>{" "}
            Attributes
          </h1>
          <p>
            We are collectible, forged and unique, minted-for-you <br />
            digital art objects stored on the Ethereum blockchain.
          </p>

          <button className="banner-btn">
            <a
              href="https://discord.gg/FqSBgmayhv"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN DISCORD
            </a>
          </button>
        </div>
      </div>
      <div className="frames text-center">
        <Marquee className="mb-4" speed={50} gradientWidth={0}>
          <img className="frame-1" src={frame1} alt="" />
        </Marquee>
        <Marquee direction="right" speed={50} gradientWidth={0}>
          <img className="frame-2" src={frame2} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
