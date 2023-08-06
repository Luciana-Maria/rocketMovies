import styled from "styled-components";
import backgroundImg from "../../assets/background.png"
export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;

`;

export const Form = styled.form`
  padding: 0 136px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > P {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  div {
    margin-top: 8px;
  }
  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

