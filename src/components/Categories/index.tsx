import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../store/filter/selectors';
import { setCategoryType } from '../../store/filter/slice';

import styles from './Categories.module.scss';

const categoriesData: string[] = [
    'All',
    'Oranges',
    'Fresh Meat',
    'Fruits',
    'Vegetables',
    'Fastfood',
];

const Categories: React.FC = () => {
    const dispatch = useDispatch();
    const { categoryType } = useSelector(selectFilter);

    const onChangeCategory = (str: string) => {
        dispatch(setCategoryType(str));
    };

    const categories = categoriesData.map((categoryName, i) => (
        <li
            key={i}
            onClick={() => onChangeCategory(categoryName)}
            className={categoryType === categoryName ? 'active' : ''}>
            {categoryName}
        </li>
    ));

    return (
        <div className={styles.root}>
            <ul>{categories}</ul>
        </div>
    );
};

export default Categories;
