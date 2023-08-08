import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh; 
`;
export const Content = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 139px;
  > div {
    margin-top: 39px;
    > a {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
    > span {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.ROSE};
      margin-bottom: 24px;
    }
    > h1 {
      margin-bottom: 40px;
    }
  }

  .input {
    display: flex;
    gap: 40px;

    margin-bottom: 40px;
  }

  .textarea {
    margin-bottom: 40px;
  }

  .note {
    display: flex;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 40px;
    div:nth-child(1) {
      max-width: 113px;
    }
  }
`

export const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  .tag1 {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.ROSE};
    padding: 16px;
    border-radius: 10px;
    width: 820px;
    text-align: center;
  }
  .tag2 {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 16px;
    border-radius: 10px;
    width: 820px;
    text-align: center;
  }
`
export const Img = styled.div`
  display: flex;
 margin-right:80px;
  .reta {
    margin-left: 16px;
    margin-top: 45px;
  }
`;