import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    ${({ theme }) => css`
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: ${theme.colors.baseText};
      font-family: ${theme.font.family.primary};
    `}
  }

  #root {
    display: flex;
    justify-content: center;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.baseBackground};
    `}
  }
`
