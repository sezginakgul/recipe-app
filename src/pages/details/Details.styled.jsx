import styled from "styled-components";

export const Div = styled.div`
  margin: 2rem;
`;

const DetailStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  margin: 2rem auto;
  ul {
    list-style-type: none;
  }
`;

export const DetailDiv = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  max-width: 1060px;
  margin: 1rem auto;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 90%;
  }
`;

export const DetailTitle = styled.div`
  font-size: 3rem;
  margin-top: 2rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 1.55rem;
    padding: 0 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    font-size: 1.2rem;
  }
`;

export const DetailImg = styled.img`
  max-width: 280px;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 280px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 150px;
  }
`;

export const NutrientsDiv = styled.div`
  max-width: 460px;
  font-size: 1.1rem;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.colors.bgLightBlue};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.bgDarkColor};
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 1rem;
    padding: 0.5rem 1rem 0.5rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    font-size: 0.9rem;
    width: 90%;
    padding: 0.5rem;
  }
`;

export const IngredientsDiv = styled(NutrientsDiv)`
  margin: 0 2rem;
  padding: 0.5rem 1.5rem;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    margin: 1.5rem;
    padding: 2;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    padding: 0.5rem 1rem 0.5rem 2rem;
    margin: 0.5rem;
  }
`;

export default DetailStyle;
