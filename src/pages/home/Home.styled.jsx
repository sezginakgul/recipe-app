import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  margin-bottom: 3rem;
`;

const CardStyle = styled.div`
  margin: 2rem 0 0 0;
  width: 350px;
  box-sizing: border-box;
  height: 350px;
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  border-radius: 10px;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.6);
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 300px;
    height: 330px;
    margin: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 80%;
    max-width: 250px;
    min-width: 185px;

    height: 310px;
    margin-top: 2rem 0 0 0;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  height: 15%;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    height: 18%;
    font-size: 1rem;
  }
`;

export const CardImg = styled.img`
  margin: 1rem;
  width: 200px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 180px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    max-width: 155px;
    min-width: 120px;
    width: 90%;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.colors.bgLightBlue};
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
`;

export default CardStyle;
