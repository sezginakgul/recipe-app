import styled from "styled-components";

export const HeaderStyle = styled.header`
  text-align: center;
  padding: 1rem 0;
  h1 {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const FormDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Input = styled.input`
  font-size: 1.1rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.bgLightBlue};
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.6);

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    font-size: 0.7rem;
  }
`;

export const Button = styled.button`
  font-size: 1.1rem;
  margin: 0.8rem;
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  background: transparent;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.6);

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    margin: 0.5rem 0;
    font-size: 0.7rem;
  }
`;

export const Options = styled.option``;
export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.bgLightBlue};
  border: 2px solid ${({ theme }) => theme.colors.bgDarkColor};
  padding: 0.5rem;
  font-size: 1.1rem;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.6);

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    font-size: 0.7rem;
  }
`;
