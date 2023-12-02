import { FunctionComponent } from 'react'

import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaulTheme } from './styles/themes/default'

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
