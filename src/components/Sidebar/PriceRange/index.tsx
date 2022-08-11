import React from 'react';
import Slider from 'rc-slider';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../../redux/filter/selectors';
import { PriceRange } from '../../../redux/filter/types';
import { setMaxPrice, setMinPrice } from '../../../redux/filter/slice';

import styles from './PriceRange.module.scss';

const marks = {
    '0': '0',
    '100': '100',
};

export const PriceRangeBlock: React.FC = () => {
    const { priceRange } = useSelector(selectFilter);
    const dispatch = useDispatch();

    const [minValue, setMinValue] = React.useState(priceRange.minPrice);
    const [maxValue, setMaxValue] = React.useState(priceRange.maxPrice);

    const onChangeMinPrice = (minPrice: PriceRange['minPrice']) => {
        dispatch(setMinPrice(minPrice));
        setMinValue(minPrice);
    };
    const onChangeMaxPrice = (maxPrice: PriceRange['maxPrice']) => {
        dispatch(setMaxPrice(maxPrice));
        setMaxValue(maxPrice);
    };
    const onChangeMinValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(event.target.valueAsNumber);
        onChangeMinPrice(event.target.valueAsNumber);
    };
    const onChangeMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.target.valueAsNumber);
        onChangeMaxPrice(event.target.valueAsNumber);
    };

    return (
        <div className={styles.root}>
            <h4>Price range</h4>
            <div className={styles.sliderWrapper}>
                <label>{`от ${minValue}`}</label>
                <Slider
                    className={styles.slider}
                    value={priceRange.minPrice}
                    marks={marks}
                    onChange={(minPrice: number) => onChangeMinPrice(minPrice)}
                />
                <label>{`до ${maxValue}`}</label>
                <Slider
                    className={styles.slider}
                    value={priceRange.maxPrice}
                    marks={marks}
                    onChange={(maxPrice: number) => onChangeMaxPrice(maxPrice)}
                />

                <div className={styles.inputs}>
                    <input
                        onChange={onChangeMinValue}
                        value={minValue}
                        type="number"
                        placeholder="from 0"
                        min="0"
                    />
                    <input
                        onChange={onChangeMaxValue}
                        value={maxValue}
                        type="number"
                        placeholder="to 999"
                        max="99"
                    />
                </div>
            </div>
        </div>
    );
};
