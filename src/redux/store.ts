import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice';
import cart from './cartSlice';
import products from './productsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    products
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()