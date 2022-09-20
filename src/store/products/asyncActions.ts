import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pickBy, identity } from 'lodash';
import { ProductItem, SearchProductsParams } from './types';

export const fetchProducts = createAsyncThunk<ProductItem[], SearchProductsParams>(
    'products/fetchProductsStatus',
    async (params) => {
        const { category, limit, sortBy, order, color, size, currentPage, search, price } = params;
        const { data } = await axios.get<ProductItem[]>(
            `https://62a77f6797b6156bff8f6a1e.mockapi.io/productData`,
            {
                params: pickBy(
                    {
                        page: currentPage,
                        limit: limit,
                        sortBy,
                        order,
                        category,
                        color,
                        size,
                        search,
                        priceRange: price,
                    },
                    identity,
                ),
            },
        );
        return data;
    },
);
