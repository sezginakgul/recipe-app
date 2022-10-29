import styled from "styled-components";

const DetailStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100vw;

  ul {
    list-style-type: none;
    text-align: end;
  }
`;

export const NutrientsDiv = styled.div`
  max-width: 33%;
  border: 2px solid red;
  padding: 1rem 1.5rem;
`;

export const DetailImg = styled.img`
  margin: 0 2rem;
  border: 2px solid red;
  max-width: 280px;
  border-radius: 10px;
`;

export const IngredientsDiv = styled(NutrientsDiv)``;

export default DetailStyle;
