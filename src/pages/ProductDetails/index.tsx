import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import SocialList from '../../components/Header/SocialList';
import { Preloder } from '../../components/Preloder';
import { addItem } from '../../store/cart/slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './ProductDetails.module.scss';

const ProductDetails: React.FC = () => {
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const [product, setProduct] = React.useState<{
        id: number;
        imageSrc: string;
        name: string;
        price: number;
        count: number;
    }>();
    const { id } = useParams();

    React.useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await axios.get(
                    'https://62a77f6797b6156bff8f6a1e.mockapi.io/productData/' + id,
                );
                setProduct(data);
            } catch (error) {
                alert('Ошибка');
            }
        }
        fetchProduct();
    }, []);

    // const updateCount = () => {
    //     if (product && inputRef.current?.value !== string) {
    //         product.count = inputRef.current.value;
    //     }
    // };

    const onClickAdd = () => {
        if (product) {
            dispatch(addItem(product));
        }

        if (items.find((obj) => obj.id === product?.id)) {
        }
    };

    if (!product) {
        return <Preloder />;
    }
    return (
        <section className={`${styles.root}`}>
            <div className="container">
                <div className={styles.topWrapper}>
                    <img
                        className={styles.pic}
                        src={require(`../../assets/${product.imageSrc}`)}
                        alt="Product"
                    />

                    <div className={styles.description}>
                        <div className={styles.descriptionTop}>
                            <h3>{product.name}</h3>
                            <div className={styles.rating}>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span>(18 reviews)</span>
                            </div>
                            <div className={styles.price}>${`${product.price}.00`}</div>
                            <p>
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Proin eget tortor risus.
                            </p>

                            <div className={styles.toBuy}>
                                <input
                                    ref={inputRef}
                                    className={styles.inputQuantity}
                                    type="text"
                                    value={product.count}
                                />
                                <button className={styles.btnHeart}>
                                    <span className="button-icon">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            color="hsl(0, 0%, 100%)">
                                            <path
                                                d="M19.1 7.25a5.06 5.06 0 00-4.96-4.75c-1.73 0-3.25.98-4.14 2.38A4.97 4.97 0 005.86 2.5 5.05 5.05 0 00.9 7.25c-.82 4.7 6.02 8.5 9.1 11.08 3.09-2.58 9.9-6.37 9.1-11.08z"
                                                fill="hsl(0, 0%, 100%)"></path>
                                        </svg>
                                    </span>
                                </button>
                                <button
                                    onClick={onClickAdd}
                                    className={`${styles.btnAdd} primary-btn`}>
                                    add to card
                                </button>
                            </div>
                        </div>
                        <ul className={styles.shortInfo}>
                            <li>
                                <b>Availability</b> <span>In Stock</span>
                            </li>
                            <li>
                                <b>Shipping</b>{' '}
                                <span>
                                    01 day shipping. <samp>Free pickup today</samp>
                                </span>
                            </li>
                            <li>
                                <b>Weight</b> <span>0.5 kg</span>
                            </li>
                            <li className={styles.share}>
                                <b>Share on</b>
                                <SocialList />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.information}>
                    <ul className={styles.navTabs} role="tablist">
                        <li className={styles.navTab}>
                            <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#tabs-1"
                                role="tab"
                                aria-selected="true">
                                Description
                            </a>
                        </li>
                        <li className={styles.navTab}>
                            <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tabs-2"
                                role="tab"
                                aria-selected="false">
                                Information
                            </a>
                        </li>
                        <li className={styles.navTab}>
                            <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tabs-3"
                                role="tab"
                                aria-selected="false">
                                Reviews <span>(1)</span>
                            </a>
                        </li>
                    </ul>
                    <div className={styles.tabContent}>
                        <div className={styles.tabPane} id="tabs-1" role="tabpanel">
                            <h6>Products Infomation</h6>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor
                                risus. Vivamus suscipit tortor eget felis porttitor volutpat.
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor
                                eget felis porttitor volutpat. Curabitur arcu erat, accumsan id
                                imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                                neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                Proin eget tortor risus.
                            </p>
                            <p>
                                Praesent sapien massa, convallis a pellentesque nec, egestas non
                                nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras
                                ultricies ligula sed magna dictum porta. Cras ultricies ligula sed
                                magna dictum porta. Sed porttitor lectus nibh. Mauris blandit
                                aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit
                                amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus
                                nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Proin eget tortor risus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.review_wrapper} id="tabs-3">
                    <div className={styles.reviesInfo}>
                        <h3 className={styles.info__titile}>Reviews</h3>
                    </div>
                    <ul className={styles.reviewList}>
                        <li className={styles.reviewList__item}>
                            <div className={styles.item__top}>
                                <h5 className={styles.userName}>Natalya</h5>
                                <div className={styles.dateAndRating}>
                                    <span className={styles.date}>September 6</span>
                                    <div className={styles.rating}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.item__text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit
                                itaque qui praesentium, magni nulla.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
