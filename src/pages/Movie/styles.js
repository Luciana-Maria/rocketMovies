import styled from 'styled-components';

export const Container = styled.div`
height:100vh;
width:100%;
display: flex;
flex-direction:column;

`;
export const Content = styled.div`
  padding: 21px 136px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 24px;
    span {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
    svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
      padding-right: 8px;
      font-size: 24px;
    }
  }
  .star {
    display: flex;
    justify-content: space-between;
    h2 {
    
      font-size: 36px;
      padding-right: 8px;
    }
  }
  img {
    display: flex;
    padding-right: 0;
  }

  > p {
    padding-right: 24px;
    align-items: center;
    justify-content: center;
    text-align: justify;
  }
  > small {
    padding-bottom: 24px;
    display: flex;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }

    img{
      border-radius:100%;
      height: 19px;
      width: 19px;
    }
  }
  
`;

export const Range = styled.div`
  display: flex;
  gap: 10px;
  .range{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding:6px;
  border-radius:10px;
  }
`