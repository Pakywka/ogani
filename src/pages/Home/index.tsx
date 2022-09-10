import React from 'react';
import { Link } from 'react-router-dom';
import { Skeleton, ProductItem } from '../../components';
import Categories from '../../components/Categories';
import styles from './Home.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { fetchProducts } from '../../redux/products/asyncActions';
import BlogItem from '../Blog/BlogItem';
import { CategorySlider } from './CategorySlider';
import { OfferDelivery } from './OfferDelivery';
import { useAppSelector } from '../../redux/hooks';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const { items, status } = useAppSelector((state) => state.products);
    const { categoryType } = useAppSelector((state) => state.filter);

    React.useEffect(() => {
        const category = categoryType !== 'All' ? categoryType : '';

        dispatch(
            fetchProducts({
                category,
            }),
        );
    }, [categoryType]);

    const products = items.map((item, i) => <ProductItem {...item} key={i} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className={styles.root}>
                <div className={styles.bannerHead}>
                    <div className={styles.banner__content}>
                        <span>FRUIT FRESH</span>
                        <h2>Vegetable 100% Organic</h2>
                        <p>Free Pickup and Delivery Available</p>
                        <Link to="/shop" className="primary-btn">
                            shop now
                        </Link>
                    </div>
                </div>
                <CategorySlider />
                <OfferDelivery />
                <section className={styles.featured}>
                    <h2 className="section-title">Recommend to buy</h2>
                    <Categories />
                    <div className={styles.productItems}>
                        {status === 'loading' ? skeletons : products}
                    </div>
                </section>
                <div className={styles.banners}>
                    <Link to="/shop" className={styles.banner}></Link>
                    <Link to="/shop" className={styles.banner}></Link>
                </div>
                <div className={styles.fromBlog}>
                    <h2 className="section-title">From The Blog</h2>
                    <div className={styles.blogItems}>
                        <BlogItem pic="1" headline="Cooking tips make cooking simple" />
                        <BlogItem pic="2" headline="6 ways to prepare breakfast for 30" />
                        <BlogItem pic="3" headline="Visit the clean farm in the US" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
