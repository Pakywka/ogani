export type CartItem = {
    id: number;
    imageSrc: string;
    name: string;
    price: number;
    count: number;
};

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}
