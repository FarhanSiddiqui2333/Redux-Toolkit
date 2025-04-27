import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

export default configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
    },
})