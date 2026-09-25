import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../services/api'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[] // Adicione o estado para favoritos caso ainda não tenha
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado ao carrinho!')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

// Certifique-se de exportar AMBAS as ações aqui:
export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
