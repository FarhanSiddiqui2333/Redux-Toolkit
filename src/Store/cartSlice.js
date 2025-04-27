import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload)
    },
    removeToCart: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);
    }
  },
})

export const { addToCart, removeToCart } = cartSlice.actions

export default cartSlice.reducer