import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { ProductItem, ProductsSliceState, Status } from './types';

const initialState: ProductsSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
};

const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        setItems(state, action: PayloadAction<ProductItem[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
