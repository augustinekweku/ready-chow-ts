import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Product } from '../repositories/product-repository'

// Define a type for the slice state
interface ProductsState {
  products: Product[]
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [] as Product[],
}

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
  },
})

export const { setProducts} = productsSlice.actions


export default productsSlice.reducer