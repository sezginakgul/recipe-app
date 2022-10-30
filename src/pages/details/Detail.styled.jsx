import styled from "styled-components";

const DetailStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;

  ul {
    list-style-type: none;
    text-align: end;
  }
`;

export const DetailImg = styled.img`
  margin: 0 2rem;
  width: 280px;
  border-radius: 10px;
`;

export const DetailButton = styled.button`
  display: block;
  width: 100px;
  margin: 0.5rem auto;
`;

export default DetailStyle;
