import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyle = styled.nav`
  background-color: ${({ theme }) => theme.colors.bgDarkColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavbarImg = styled.img`
  width: 125px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 80px;
  }
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem 0 3rem;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 1.25rem;
    margin: 0 0.7rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    margin: 0.8rem;
  }
`;

export const NavbarLinkLogin = styled(Link)`
  color: red;
  text-decoration: none;
  margin: 0 1rem 0 3rem;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 1.25rem;
    margin: 0 0.7rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    margin: 0.8rem;
  }
`;

export default NavbarStyle;
