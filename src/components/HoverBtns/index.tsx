import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/slice';

import styles from './HoverBtns.module.scss';

type HoverBtnsProps = {
    id: number;
    imageSrc: string;
    name: string;
    price: number;
    oldPrice: number;
};

export const HoverBtns: React.FC<HoverBtnsProps> = ({ id, imageSrc, name, price, oldPrice }) => {
    const dispatch = useDispatch();

    const onClickAdd = () => {
        const item = {
            id,
            imageSrc,
            name,
            price,
            count: 0,
        };
        dispatch(addItem(item));
    };

    return (
        <ul className={`${styles.root} hoverButtons`}>
            <li>
                <button>
                    <i className="fa fa-heart"></i>
                </button>
            </li>
            <li>
                <button>
                    <i className="fa fa-retweet"></i>
                </button>
            </li>
            <li onClick={onClickAdd}>
                <button>
                    <i className="fa fa-shopping-cart"></i>
                </button>
            </li>
        </ul>
    );
};
