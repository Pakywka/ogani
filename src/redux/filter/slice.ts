import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, PriceRange, SortPropertyEnum, SortType, ViewType } from './types';

const initialState: FilterSliceState = {
    searchValue: '',
    categoryType: 'All',
    colorType: '',
    sizeType: '',
    sortType: { name: 'rating', sortProperty: SortPropertyEnum.RATING },
    viewType: {
        optionClass: 'icon_grid-2x2',
        itemsClass: 'view-tile',
    },
    currentPage: 1,
    priceRange: { minPrice: 0, maxPrice: 99 },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCategoryType(state, action: PayloadAction<string>) {
            if (state.categoryType) {
            }
            state.categoryType = action.payload;
        },
        setColorType(state, action: PayloadAction<string>) {
            state.colorType = action.payload;
        },
        setSizeType(state, action: PayloadAction<string>) {
            state.sizeType = action.payload;
        },
        setSortType(state, action: PayloadAction<SortType>) {
            state.sortType = action.payload;
        },
        setViewType(state, action: PayloadAction<ViewType>) {
            state.viewType = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setMinPrice(state, action: PayloadAction<PriceRange['minPrice']>) {
            state.priceRange.minPrice = action.payload;
        },
        setMaxPrice(state, action: PayloadAction<PriceRange['maxPrice']>) {
            state.priceRange.maxPrice = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.categoryType = action.payload.categoryType;
            state.colorType = action.payload.colorType;
            state.sizeType = action.payload.sizeType;
            state.sortType = action.payload.sortType;
            state.currentPage = Number(action.payload.currentPage);
            state.priceRange.minPrice = Number(action.payload.priceRange.minPrice);
            state.priceRange.maxPrice = Number(action.payload.priceRange.maxPrice);
        },
    },
});

export const {
    setSearchValue,
    setCategoryType,
    setColorType,
    setSizeType,
    setSortType,
    setViewType,
    setCurrentPage,
    setMinPrice,
    setMaxPrice,
    setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
