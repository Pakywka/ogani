import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../services/Auth';

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

type AuthState = {
    user: User;
};

const slice = createSlice({
    name: 'auth',
    initialState: { user: {} } as AuthState,
    reducers: {
        setCredentials: (state, { payload: user }: PayloadAction<User>) => {
            state.user = user;
        },
    },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
