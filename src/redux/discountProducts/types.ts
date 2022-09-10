export type DiscountItem = {
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

export interface DiscountProductsSliceState {
    discountItems: DiscountItem[];
    status: Status;
}
