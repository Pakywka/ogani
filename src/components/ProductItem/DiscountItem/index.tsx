import React from 'react';
import { ProductItem } from '..';

import styles from './DiscountItem.module.scss';

type ProductItemProps = {
    id: number;
    imageSrc: string;
    categoryName: string;
    name: string;
    price: number;
    oldPrice: number;
};

const DiscountItem: React.FC<ProductItemProps> = ({
    id,
    imageSrc,
    categoryName,
    name,
    price,
    oldPrice,
}) => {
    return (
        <div className={styles.root}>
            <div className={styles.discountAmount}>-20%</div>
            <ProductItem
                id={id}
                imageSrc={imageSrc}
                categoryName={categoryName}
                name={name}
                price={price}
                oldPrice={oldPrice}
            />
        </div>
    );
};

export default DiscountItem;
