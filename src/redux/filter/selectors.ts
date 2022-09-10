import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.filter;
export const selectCategoryType = (state: RootState) => state.filter.categoryType;
