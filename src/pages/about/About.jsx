import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AboutStyle, { AboutImg, AboutUs } from "./About.styled";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutStyle>
        <AboutImg
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.png"
          alt=""
        />
        <AboutUs>
          Hi There I'm Sezgin A. <br />
          Frontend Developer <br />
          My experience are React.js, Javascript, HTML5, CSS3, Bootstrapt, SASS
          and etc.
          <br />
          <br />
          <p>
            This Project Developed With <span> {"<Styled Components/>"}</span>
          </p>
        </AboutUs>
      </AboutStyle>
    </>
  );
};

export default About;
