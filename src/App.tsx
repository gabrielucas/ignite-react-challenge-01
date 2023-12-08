import { FunctionComponent } from 'react'

import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaulTheme } from './styles/themes/default'
import { TodoProvider } from './context/useTodoContext/TodoProvider'

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaulTheme}>
      <TodoProvider>
        <Home />
      </TodoProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
