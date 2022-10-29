import React from "react";
import ContactStyle, { AboutBorder, SocialIcons } from "./Contact.styled";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <AboutBorder>
        <ContactStyle>
          If you want to contact me, click the button below...
          <br />
          <SocialIcons>
            <a
              href="https://github.com/sezginakgul"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sezginakgul/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:sezgin.akgull@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BiMailSend />
            </a>
          </SocialIcons>
        </ContactStyle>
      </AboutBorder>
    </>
  );
};

export default Contact;
