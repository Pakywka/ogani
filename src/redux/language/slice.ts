import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageSliceState } from './types';

const initialState: LanguageSliceState = {
    languageId: 0,
    open: false,
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setOpen(state, action: PayloadAction<boolean>) {
            state.open = action.payload;
        },
        setLanguage(state, action: PayloadAction<number>) {
            state.languageId = action.payload;
        },
    },
});

export const { setOpen, setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
