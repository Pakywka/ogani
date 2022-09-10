export enum SortPropertyEnum {
    RATING = 'rating',
    NAME = '-name',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}

export type SortType = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export type ViewType = {
    optionClass: string;
    itemsClass: string;
};

export type PriceRange = {
    minPrice: number;
    maxPrice: number;
};

export interface FilterSliceState {
    searchValue: string;
    categoryType: string;
    colorType: string;
    sizeType: string;
    sortType: SortType;
    viewType: ViewType;
    currentPage: number;
    priceRange: PriceRange;
}
