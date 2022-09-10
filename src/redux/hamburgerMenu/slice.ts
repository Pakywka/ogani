import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuSliceState } from './types';

const initialState: MenuSliceState = {
    open: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setOpen(state, action: PayloadAction<boolean>) {
            state.open = action.payload;
        },
    },
});

export const { setOpen } = menuSlice.actions;
export default menuSlice.reducer;
