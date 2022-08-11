import React from 'react';

type CheckoutInputProps = {
    label: string;
    type: string;
};

const CheckoutInput: React.FC<CheckoutInputProps> = ({ label, type }) => {
    return (
        <div className="checkout__input">
            <p>
                {label}
                <span>*</span>
            </p>
            <input type={type} />
        </div>
    );
};

export default CheckoutInput;
