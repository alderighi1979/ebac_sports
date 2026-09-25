import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'

const Header = () => {
  // Declarando a variável lendo os itens do reducer do carrinho:
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  // Ou declare exatamente com o nome 'itensNoCarrinho':
  const itensNoCarrinho = itens.length

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensNoCarrinho} itens no carrinho</span>
      </div>
    </S.Header>
  )
}

export default Header
