import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  

  
  > header {
    padding-top: 45px;
    padding-left: 114px;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    span {
      max-width: 340px;
      padding-bottom:30px
    }
  }
`;

export const Img = styled.div`
  display: flex;

  .retangulo {
    margin-left:8px;
    margin-top:28px;
  }
`;

export const Content = styled.div`
  max-width: 1666px;
  height: 238px;
  margin-top: 24px;
  margin-left: 114px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 15px;
  padding: 32px;
  > h2 {
    display: flex;
    font-size: 24px;
  }
  .star {
    display: flex;
    gap: 6px;
    color: ${({ theme }) => theme.COLORS.ROSE};
    padding-top: 8px;
  }
  >  p {
       display: flex;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      padding-top: 15px;
      padding-bottom: 15px;
      align-items: justify;
    }
  
`;

export const Range = styled.div`
display: flex;
gap: 10px;
.range{
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY_100};
padding:6px;
margin-top:15px;
border-radius:10px;
}
`;
  
