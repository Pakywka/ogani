import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDiscountProducts } from './asyncActions';
import { DiscountItem, DiscountProductsSliceState, Status } from './types';

const initialState: DiscountProductsSliceState = {
    discountItems: [],
    status: Status.LOADING, // loading | success | error
};

const discountProductsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        setDiscountItems(state, action: PayloadAction<DiscountItem[]>) {
            state.discountItems = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDiscountProducts.pending, (state) => {
            state.status = Status.LOADING;
            state.discountItems = [];
        });
        builder.addCase(fetchDiscountProducts.fulfilled, (state, action) => {
            state.discountItems = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchDiscountProducts.rejected, (state) => {
            state.status = Status.ERROR;
            state.discountItems = [];
        });
    },
});

export const { setDiscountItems } = discountProductsSlice.actions;

export default discountProductsSlice.reducer;
