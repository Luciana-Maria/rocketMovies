import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 145px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: center;
    padding: 0 124px;

    p {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }

    svg {
      
      font-size: 24px;
      padding-right: 10px;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: -110px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }
  
  > label {
    width:48px;
    height:48px; 
    background-color:${({theme}) => theme.COLORS.ROSE };
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content:center;
    position:absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
  
  > input{
    display: none;
  }
    svg{
      width: 20px;
      height: 20px;
      color: ${({theme})=> theme.COLORS.BACKGROUND_800};
      
    }
  }
  
`;

export const Form = styled.form`
max-width: 340px;
margin: 0px auto 0;
 >div{
  margin-top:8px;
 }
  > div:nth-child(3) {
    margin-top: 24px;
  }
`;



