import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DiscountItem } from './types';

export const fetchDiscountProducts = createAsyncThunk<DiscountItem[]>(
    'discountProducts/fetchDiscountProducts',
    async () => {
        const { data } = await axios.get<DiscountItem[]>(
            `https://62a77f6797b6156bff8f6a1e.mockapi.io/productDiscountData`,
        );
        return data;
    },
);
