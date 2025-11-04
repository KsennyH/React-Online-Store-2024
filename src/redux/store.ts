import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice';
import cart from './cartSlice';
import search from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productApi } from '@/api/product/productApi';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { newsApi } from '@/api/news/newsApi';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cart);

export const store = configureStore({
  reducer: {
    filter,
    cart: persistedCartReducer,
    search,
    [productApi.reducerPath]: productApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([productApi.middleware, newsApi.middleware]),
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()