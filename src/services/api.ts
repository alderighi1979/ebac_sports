import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // Mantém a URL exata até a rota api/ebac_sports
    baseUrl: 'https://api-ebac.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      // Como o baseUrl já aponta para a rota final, a query fica vazia
      query: () => ''
    })
  })
})

export const { useGetProdutosQuery } = api
