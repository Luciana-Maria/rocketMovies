import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 145px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  
  padding: 24px 123px;
  gap: 64px;
  border-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 34px;
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`
export const Profile = styled.div`
  height: 68px;
  width: 250px;
  display: flex;
  text-align: center;

  > div {
    display: flex;
    flex-direction: column;
    text-align:center;
  
    width: 125px;
    height:36px;
    
    >  strong {
      display: flex;
      text-align: center;
      align-items: center;
      padding-top:8px;
     }

    > span {
      padding-right:6px;
      text-align:right;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;