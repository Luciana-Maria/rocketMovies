import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.GRAY_100};
  border: none;
  resize: none; /*fixo */
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
