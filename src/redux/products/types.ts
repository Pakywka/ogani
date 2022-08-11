export type ProductItem = {
    id: number;
    imageSrc: string;
    categoryName: string;
    name: string;
    price: number;
    oldPrice: number;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type SearchProductsParams = {
    category?: string;
    limit?: number;
    sortBy?: string;
    order?: string;
    color?: string;
    size?: string;
    currentPage?: number;
    search?: string;
    price?: string;
};

export interface ProductsSliceState {
    items: ProductItem[];
    status: Status;
}
