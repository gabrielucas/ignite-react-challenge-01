import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaulTheme } from './styles/themes/default.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaulTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
