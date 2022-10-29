import React from "react";
import RecipeCard from "../../pages/home/RecipeCard";
import Form from "./Form";
import { HeaderStyle } from "./Header.styled";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <h1>Search Food</h1>
        <Form />
      </HeaderStyle>
    </>
  );
};

export default Header;
