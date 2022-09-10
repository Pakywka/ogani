export interface IAdress {
    country: string;
    city: string;
    street: string;
    house: string;
    postcode: number;
}

export interface IShippingFields {
    email: string;
    phoneNumber: number;
    firstName: string;
    lastName: string;
    address: IAdress;
    createAccount: boolean;
    password: string;
    differentAddress: boolean;
}

export interface IOption {
    value: string;
    label: string;
}
