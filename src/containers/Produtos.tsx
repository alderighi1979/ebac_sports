import { useDispatch, useSelector } from 'react-redux'
import Produto from '../components/Produto'
import { useGetProdutosQuery, Produto as ProdutoType } from '../services/api'
import { favoritar, adicionar } from '../store/reducers/carrinho'
import { RootState } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos, isLoading, error } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.carrinho.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const idsDosFavoritos = favoritos.map((f) => f.id)

    return idsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando produtos...</h2>
  if (error) return <h2>Ocorreu um erro ao carregar os produtos.</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={(prod) => dispatch(favoritar(prod))}
          aoComprar={(prod) => dispatch(adicionar(prod))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
