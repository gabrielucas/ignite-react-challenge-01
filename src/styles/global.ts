import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

    body {
      background: ${({ theme }) => theme['--gray-600']};
      color: ${({ theme }) => theme['--gray-100']};
      -webkit-font-smothing: antialiased;
    }

    body,
    button,
    input {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: ${({ theme }) => theme['--gray-100']};
      outline: none;
      border: none;
    }

    button {
      background: none;
    }

`
