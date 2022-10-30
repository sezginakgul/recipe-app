import styled from "styled-components";

const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutImg = styled.img`
  margin-top: 2rem;
  border-radius: 15px;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.6);

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 90%;
  }
`;

export const AboutUs = styled(AboutStyle)`
  margin-top: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  color: ${({ theme }) => theme.colors.bgDarkColor};
  font-size: 1.6rem;
  font-weight: bold;
  width: 720px;
  line-height: 2.5rem;
  padding: 1rem;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.hoverColor};
  }
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 90%;
    font-size: 1.2rem;
    p {
      margin-top: -0.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 90%;
    font-size: 1rem;
  }
`;

export default AboutStyle;
