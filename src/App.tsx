import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle, Container as MainContainer } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Produtos />
      </MainContainer>
    </>
  )
}

export default App
