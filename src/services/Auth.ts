import { API_URL } from '../utils/http';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
    email: string;
    id: string;
    isActivated: boolean;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        registration: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'registration',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: (credentials) => ({
                url: 'logout',
                method: 'POST',
                body: credentials,
            }),
        }),
        checkAuth: builder.query<AuthResponse, string>({
            query: () => ({
                url: 'refresh',
            }),
        }),
        protected: builder.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    }),
});

export const {
    useLoginMutation,
    useRegistrationMutation,
    useLogoutMutation,
    useCheckAuthQuery,
    useProtectedMutation,
} = api;
