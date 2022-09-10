import { configureStore } from '@reduxjs/toolkit';
import language from './language/slice';
import menu from './hamburgerMenu/slice';
import cart from './cart/slice';
import filter from './filter/slice';
import products from './products/slice';
import discountProducts from './discountProducts/slice';

export const store = configureStore({
    reducer: {
        language,
        menu,
        cart,
        filter,
        products,
        discountProducts,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
