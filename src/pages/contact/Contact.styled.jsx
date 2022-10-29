import styled from "styled-components";

const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.bgDarkColor};
  font-size: 2rem;
  font-weight: bold;
  max-width: 825px;
  margin: auto;
  line-height: 2.5rem;
  /* padding: 1rem; */
  text-align: center;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 90%;
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 90%;
    font-size: 1rem;
  }
`;

export const SocialIcons = styled(ContactStyle)`
  flex-direction: row;
  margin: 2rem 0 0 0;
  a {
    margin: 0 3rem;
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.bgDarkColor};
    transition: transform ease-in-out 0.7s;
    &:hover {
      transform: rotate(360deg);
      color: ${({ theme }) => theme.colors.hoverColor};
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    a {
      margin: 0 2rem;
      font-size: 5.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: flex;
    flex-direction: column;
    margin: 1rem 0 0 0;
    a {
      margin: 0.5rem 0;
      font-size: 6rem;
    }
  }
`;

export const AboutBorder = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  margin: 4rem auto;
  padding: 1rem 0.4rem;
  width: 850px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 90%;
    margin: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 90%;
    margin: 1rem;
  }
`;

export default ContactStyle;
