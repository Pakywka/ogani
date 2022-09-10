import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LatestProductItem } from '..';
import Categories from '../Categories';
import { selectFilter } from '../../redux/filter/selectors';
import { setColorType, setSizeType } from '../../redux/filter/slice';
import { colorType, LatestProduct } from './types';
import { PriceRangeBlock } from './PriceRange';

import styles from './Sidebar.module.scss';
import { SwiperSlider } from '../Swiper';

export const colorsData: colorType[] = [
    {
        colorName: 'Orange',
        color: 'rgb(215	87 43)',
    },
    {
        colorName: 'Red',
        color: 'rgb(201	42 57)',
    },
    {
        colorName: 'Black',
        color: 'black',
    },
    {
        colorName: 'Blue',
        color: 'rgb(36 80 154)',
    },
    {
        colorName: 'Green',
        color: 'rgb(61 170 75)',
    },
    {
        colorName: 'Purple',
        color: 'purple',
    },
];

export const sizesData: string[] = ['large', 'medium', 'small', 'tiny'];

export const latestProductData: LatestProduct[] = [
    {
        name: 'Crab Pool Security',
        price: 10,
    },
    {
        name: 'Chocolate',
        price: 3,
    },
    {
        name: 'Orange',
        price: 1,
    },
    {
        name: 'Crab Pool Security',
        price: 10,
    },
    {
        name: 'Chocolate',
        price: 3,
    },
    {
        name: 'Orange',
        price: 1,
    },
    {
        name: 'Crab Pool Security',
        price: 10,
    },
    {
        name: 'Chocolate',
        price: 3,
    },
    {
        name: 'Orange',
        price: 1,
    },
];

export const Sidebar: React.FC = () => {
    const { colorType, sizeType } = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChangeColor = (str: string) => {
        dispatch(setColorType(str));
    };
    const onChangeSize = (str: string) => {
        dispatch(setSizeType(str));
    };

    const colorsElements = colorsData.map((obj, i) => (
        <div
            key={i}
            onClick={() => onChangeColor(obj.colorName)}
            className={`${styles.colors__item} ${colorType === obj.colorName ? 'active' : ''}`}>
            <i style={{ backgroundColor: obj.color }} className={styles.colors__circle}></i>
            <span>{obj.colorName}</span>
        </div>
    ));
    const sizesElements = sizesData.map((obj, i) => (
        <div
            key={i}
            onClick={() => onChangeSize(obj)}
            className={`${styles.sizes__item} ${sizeType === obj ? 'active' : ''}`}>
            {obj}
        </div>
    ));
    const latestProductElements = latestProductData.map((obj, i) => (
        <LatestProductItem key={i} {...obj} />
    ));

    return (
        <div className={styles.root}>
            <div className={styles.categories}>
                <h4>Department</h4>
                <Categories />
            </div>
            <PriceRangeBlock />
            <div className={styles.colors}>
                <h4>Colors</h4>
                <div className={styles.colors__items}>{colorsElements}</div>
            </div>
            <div className={styles.sizes}>
                <h4>Popular Size</h4>
                <div className={styles.sizes__items}>{sizesElements}</div>
            </div>
            {/* <div className={styles.latestProducts}>
                <h4>Latest Products</h4>
                <SwiperSlider
                    slidesPerView={5}
                    navigation={false}
                    pagination={false}
                    direction={'horizontal'}
                    rows={3}
                    array={latestProductElements}
                />
            </div> */}
        </div>
    );
};
