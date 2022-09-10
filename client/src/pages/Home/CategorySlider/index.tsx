import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlider } from '../../../components/Swiper';
import styles from './CategorySlider.module.scss';

type CategoriesItemProps = {
    id: number;
    imageSrc: string;
    categoryName: string;
};

export const CategoriesData = [
    { id: 0, categoryName: 'Fresh Fruit', imageSrc: 'img/categories/cat-1.jpg' },
    { id: 1, categoryName: 'Dried Fruit', imageSrc: 'img/categories/cat-2.jpg' },
    { id: 2, categoryName: 'Vegetables', imageSrc: 'img/categories/cat-3.jpg' },
    { id: 3, categoryName: 'Drink Fruits', imageSrc: 'img/categories/cat-4.jpg' },
    { id: 4, categoryName: 'Fresh Meat', imageSrc: 'img/categories/cat-5.jpg' },
];

export const CategoriesItem: React.FC<CategoriesItemProps> = ({ id, imageSrc, categoryName }) => {
    return (
        <div className={`${styles.item}`}>
            <div
                className={`${styles.pic} set-bg`}
                style={{ backgroundImage: `url(${imageSrc})` }}
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
