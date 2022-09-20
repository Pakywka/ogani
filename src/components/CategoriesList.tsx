import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilter } from '../store/filter/selectors';
import { setCategoryType } from '../store/filter/slice';

import styles from './CategoriesBlock/CategoriesBlock.module.scss';

const categoriesList: string[] = [
    'Fresh Meat',
    'Vegetables',
    'Fruits',
    'Fresh Berries',
    'Ocean Foods',
    'Butter & Eggs',
    'Fastfood',
    'Fresh Onion',
    'Papayaya & Crisps',
    'Oatmeal',
    'Juice',
];

export const CategoriesList: React.FC = () => {
    const dispatch = useDispatch();
    const { categoryType } = useSelector(selectFilter);

    const onChangeCategory = (str: string) => {
        dispatch(setCategoryType(str));
    };

    const categories = categoriesList.map((value, i) => (
        <Link
            to={`shop/productData?category=${value}`}
            key={i}
            onClick={() => onChangeCategory(value)}
            className={categoryType === value ? 'active' : ''}>
            {value}
        </Link>
    ));

    return <ul className={styles.categoriesList}>{categories}</ul>;
};
