import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(https://picsum.photos/1024/1024) center center;
  background-size: cover;
`;

export const Area = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border: 3px solid ${({ theme }) => theme.colors.loginBorderColor};
  padding: 1.4rem;
  background: transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.598) 0px 3px 10px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 300px;
    height: 300px;
    img {
      width: 140px;
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 280px;
    height: 280px;
    img {
      width: 120px;
    }
  }
`;

export const Input = styled.input`
  padding: 1rem;
  margin: 0.5rem;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.LoginInputColor};
  border: none;
  opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.598) 0px 3px 10px;
  border-radius: 10px;
  font-weight: bolder;

  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    padding: 0.8rem;
    margin: 0.3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    padding: 0.7rem;
    margin: 0.3rem;
  }
`;

export const Button = styled.button`
  margin: 0.5rem;
  padding: 1rem;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.LoginButtonColor};
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  font-weight: bolder;

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    padding: 0.8rem;
    margin: 0.3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    padding: 0.7rem;
    margin: 0.3rem;
  }
`;

export const LoadingDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    color: ${({ theme }) => theme.colors.LoadingDivColor};
    font-weight: bolder;
    font-size: 2rem;
  }

  img {
    width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    div {
      font-size: 1.5rem;
    }
    img {
      width: 300px;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    div {
      font-size: 1.3rem;
    }
    img {
      width: 220px;
    }
  }
`;

export default Div;
