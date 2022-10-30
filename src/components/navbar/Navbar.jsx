import React from "react";
import NavbarStyle, {
  NavbarImg,
  NavbarLink,
  NavbarLinkLogin,
} from "./Navbar.styled";
import { useNavigate } from "react-router-dom";
import FoodTruck from "../../assets/food-truck.gif";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarStyle>
      <div>
        <NavbarImg
          src={FoodTruck}
          alt="cook"
          onClick={() => navigate("/home")}
        />
      </div>

      <div>
        <NavbarLink to="/home">HOME</NavbarLink>
        <NavbarLink to="/about">ABOUT</NavbarLink>
        <NavbarLink to="/contact">CONTACT</NavbarLink>
        <NavbarLinkLogin className="logout" to="/">
          LOGOUT
        </NavbarLinkLogin>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
