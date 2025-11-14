import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, searchReducer } from '@/features/product';
import { cartReducer } from '@/features/cart';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productApi } from '@/entities/product';
import { newsApi } from '@/entities/article';
import { categoryApi } from '@/entities/article-category';
import { tagsApi } from '@/entities/tag';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: persistedCartReducer,
    search: searchReducer,
    [productApi.reducerPath]: productApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([productApi.middleware, newsApi.middleware, categoryApi.middleware, tagsApi.middleware]),
})

export const persistor = persistStore(store);
