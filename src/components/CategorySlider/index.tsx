import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlider } from '../Swiper';
import styles from './CategorySlider.module.scss';

type CategoriesItemProps = {
    id: number;
    categoryName: string;
};

export const CategoriesData = [
    { id: 0, categoryName: 'Fresh Fruit' },
    { id: 1, categoryName: 'Dried Fruit' },
    { id: 2, categoryName: 'Vegetables' },
    { id: 3, categoryName: 'Drink Fruits' },
    { id: 4, categoryName: 'Fresh Meat' },
];

export const CategoriesItem: React.FC<CategoriesItemProps> = ({ id, categoryName }) => {
    return (
        <div className={`${styles.item}`}>
            <div
                className={`${styles.pic} set-bg`}
                style={{
                    backgroundImage: `url(${require(`../../assets/img/categories/cat-${++id}.jpg`)}`,
                }}
            />
            <Link to={`/product/${id}`} className={styles.text}>
                <h5 className={styles.categoryName}>{categoryName}</h5>
            </Link>
        </div>
    );
};

export const CategorySlider: React.FC = () => {
    const categoriesElements = CategoriesData.map((item, id) => (
        <CategoriesItem key={id} {...item} />
    ));
    return (
        <div className={styles.root}>
            <SwiperSlider
                direction="horizontal"
                navigation={true}
                pagination={false}
                slidesPerView={window.innerWidth < 576 ? 3 : 4}
                rows={1}
                array={categoriesElements}
            />
        </div>
    );
};
