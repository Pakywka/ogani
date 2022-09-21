import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderMenu.module.scss';

import MenuList from '../MenuList';
import CategoriesBlock from '../../CategoriesBlock';
import { Search } from '../../Search';
import { useAppSelector } from '../../../store/hooks';
import { DeliveryModal } from '../../DeliveryModal';
import logo from '../../../assets/img/logo.png';
import logoSmall from '../../../assets/img/logo-small.png';

type HeaderMenuProps = {
    openMenu: () => void;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ openMenu }) => {
    const { items } = useAppSelector((state) => state.cart);

    const [show, setShow] = React.useState<boolean>(false);
    const showModal = async () => {
        setShow(!show);
        if (!show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    };

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <button className={styles.mobileDelivery}>
                    <div className={styles.delivery__text}>Pickup, Hudson yards</div>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="currentColor">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.22 5.24a1 1 0 00.02 1.41l5.4 5.29-5.4 5.28a1 1 0 101.4 1.43l6.12-6a1 1 0 000-1.43l-6.12-6a1 1 0 00-1.42.02z"
                            fill="currentColor"></path>
                    </svg>
                </button>
                <div className={`${styles.top__wrapper} container`}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <Link to="/" className={styles.logoSmall}>
                        <img src={logoSmall} alt="Logo" />
                    </Link>
                    <div className={styles.searchAndDelivery}>
                        <div className={styles.catalog}>
                            <CategoriesBlock />
                            <form className={styles.searchForm}>
                                <Search />
                            </form>
                        </div>
                        {show && <DeliveryModal showModal={showModal} />}
                        <button onClick={showModal} className={styles.delivery}>
                            <div className={styles.deliveryButton__icon_wrapper}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#50b946">
                                    <path
                                        d="M3.53 5.97a2 2 0 011.46-.64h14.4a2 2 0 011.5.68l2.09 2.38a1 1 0 01.24.65v.81a2.15 2.15 0 01-4.26.38l-.2-1.09-.06.38A3 3 0 0115.75 12h-.53a3 3 0 01-2.95-2.48l-.07-.38-.06.38A3 3 0 019.18 12h-.52A3 3 0 015.7 9.52l-.06-.38-.18 1A2.25 2.25 0 011 9.75v-.7c0-.24.1-.48.27-.67l2.26-2.41z"
                                        fill="#50b946"></path>
                                    <rect
                                        x="4.33"
                                        y="2"
                                        width="15.56"
                                        height="2.22"
                                        rx="1.11"
                                        fill="#50b946"></rect>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.22 14.11a1 1 0 011-1H20a1 1 0 011 1V20a2 2 0 01-2 2h-1.33v-5.67a1 1 0 00-1-1h-1.34a1 1 0 00-1 1V22h-9.1a2 2 0 01-2-2v-5.89zm3.34 2.72c0-.83.67-1.5 1.5-1.5H9.5c.83 0 1.5.67 1.5 1.5v1.45c0 .83-.67 1.5-1.5 1.5H8.06a1.5 1.5 0 01-1.5-1.5v-1.45z"
                                        fill="#50b946"></path>
                                </svg>
                            </div>
                            <div className={styles.deliveryButton__content}>
                                <span className={styles.deliveryButton__name}>Pickup</span>
                                <div className={styles.deliveryButton__shopName}>Hudson yards</div>
                            </div>
                        </button>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.cart__icons}>
                            <a href="#s" className={styles.favorite}>
                                <span className={`${styles.buttonIcon} button-icon`}>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="#B6BAC2">
                                        <path
                                            d="M19.1 7.25a5.06 5.06 0 00-4.96-4.75c-1.73 0-3.25.98-4.14 2.38A4.97 4.97 0 005.86 2.5 5.05 5.05 0 00.9 7.25c-.82 4.7 6.02 8.5 9.1 11.08 3.09-2.58 9.9-6.37 9.1-11.08z"
                                            fill="#B6BAC2"></path>
                                    </svg>
                                </span>
                            </a>
                            <Link to="/profile">
                                <span className={`${styles.buttonIcon} button-icon`}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="#B6BAC2">
                                        <path
                                            d="M12 0c1.73 0 3.299.62 4.421 1.745 1.137 1.14 1.69 2.674 1.56 4.318C17.72 9.337 15.04 12 12 12c-3.042 0-5.725-2.664-5.981-5.938-.13-1.66.42-3.196 1.55-4.327C8.687.616 10.26 0 12 0zM1.846 24h20.308c.265.003.529-.049.77-.152.242-.103.455-.255.626-.445.375-.416.526-.985.414-1.56-.487-2.508-2.007-4.614-4.395-6.093-2.122-1.313-4.81-2.036-7.569-2.036-2.76 0-5.447.723-7.569 2.036C2.043 17.229.523 19.336.036 21.844c-.112.575.04 1.143.414 1.56.17.19.384.34.626.444.241.103.505.155.77.152z"
                                            fill="#B6BAC2"></path>
                                    </svg>
                                </span>
                            </Link>
                            <Link to="/cart">
                                <span className={`${styles.buttonIcon} button-icon`}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        color="#B6BAC2">
                                        <path
                                            d="M9.42 17.53c-1.09 0-1.97.82-1.97 1.83 0 1.01.88 1.82 1.97 1.82 1.09 0 1.94-.8 1.94-1.82 0-1-.85-1.83-1.94-1.83zm9.18 0c-1.09 0-1.97.82-1.97 1.83 0 1.01.88 1.82 1.97 1.82 1.09 0 1.94-.8 1.94-1.82 0-1-.85-1.83-1.94-1.83zm2.1-9.33H8.29c-.2-.8-.44-1.75-.95-3.5-.3-1-1.04-1.7-2.1-1.7H3.3C2.6 3 2 3.44 2 4.1c0 .68.59 1.17 1.31 1.17h1.14c.48 0 .74.35.79.65.79 3.5 1.3 5.3 2.21 8.96.2.75.59 1.43 1.68 1.43h6.82c2.65 0 4.55-1.35 5.34-4.18.5-1.75.7-2.52.7-2.52.12-.75-.5-1.42-1.3-1.42z"
                                            fill="#B6BAC2"></path>
                                    </svg>{' '}
                                </span>
                                <span className={styles.iconCount}>{totalCount}</span>
                            </Link>
                        </div>
                    </div>
                    <button onClick={openMenu} className={styles.burger}>
                        <span className={styles.burger__item}></span>
                        <span className={styles.burger__item}></span>
                        <span className={styles.burger__item}></span>
                    </button>
                </div>
            </div>

            <div className={`${styles.bottom} container`}>
                <MenuList />
                <div className={styles.navigationRight}>
                    <Link to="" className={`${styles.joinTheClub} ${styles.navigation_item}`}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#50b946">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.1837 4.91224L12 4.74976L4.81627 4.91224C3.48511 4.94235 2.35801 5.90297 2.11732 7.21254C1.5356 10.3776 1.5356 13.6223 2.11732 16.7874C2.35801 18.0969 3.48511 19.0575 4.81627 19.0876L12 19.2501L19.1837 19.0876C20.5149 19.0575 21.642 18.0969 21.8827 16.7874C22.4644 13.6223 22.4644 10.3776 21.8827 7.21254C21.642 5.90297 20.5149 4.94235 19.1837 4.91224ZM4.85019 6.41186L12 6.25014L19.1498 6.41186C19.7701 6.42589 20.2952 6.87349 20.4074 7.48369C20.5607 8.31767 20.6711 9.15752 20.7388 9.99994H3.26121C3.32886 9.15752 3.43933 8.31767 3.59261 7.48369C3.70476 6.87349 4.22993 6.42589 4.85019 6.41186ZM3.18103 11.9999C3.18103 13.5116 3.31822 15.0233 3.59261 16.5162C3.70476 17.1264 4.22993 17.574 4.85019 17.588L12 17.7498L19.1498 17.588C19.7701 17.574 20.2952 17.1264 20.4074 16.5162C20.6818 15.0233 20.819 13.5116 20.819 11.9999H3.18103Z"
                                fill="#50b946"
                            />
                        </svg>
                        Join the club
                    </Link>
                    <Link to="" className={`${styles.delivery} ${styles.navigation_item}`}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#50b946">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.5 20.6a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zm0 1.9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-13-1.9a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zm0 1.9a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                                fill="#50b946"></path>
                            <rect
                                x="6.09"
                                y="7.54"
                                width="5.72"
                                height="3.66"
                                rx="0.67"
                                transform="rotate(-45 6.1 7.54)"
                                fill="#50b946"></rect>
                            <path
                                d="M16.25 6.93c.92 0 1.65-.76 1.65-1.72 0-.95-.73-1.71-1.65-1.71-.92 0-1.65.76-1.65 1.71 0 .96.73 1.72 1.65 1.72zm-1.3 4.95h3.2a.86.86 0 000-1.71h-2.08l-1.75-3.15a1.5 1.5 0 00-1.37-.76c-.46 0-.82.2-1.1.48l-3.4 3.52A1.6 1.6 0 008 11.4c0 .58.28 1.15.73 1.43l3.12 1.9-.9 3.67a.89.89 0 001.72.43L14 13.5l-3.62-2.1 2.57-2.76 2 3.24z"
                                fill="#50b946"></path>
                        </svg>
                        Delivery
                    </Link>
                    <Link to="/contact" className={`${styles.shops} ${styles.navigation_item}`}>
                        <svg
                            width="20"
                            height="20"
                            color="#50b946"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 213.195 213.195">
                            <path
                                fill="#50b946"
                                d="M210.856,203.383l-25.689-79.277c-1.002-3.093-3.884-5.188-7.135-5.188h-18.135c8.12-14.714,13.953-32.089,13.953-51.658
	C173.85,30.173,143.68,0,106.596,0c-37.081,0-67.25,30.173-67.25,67.26c0,19.569,5.833,36.944,13.952,51.658H35.164
	c-3.252,0-6.132,2.095-7.135,5.188L2.34,203.383c-0.74,2.283-0.342,4.782,1.069,6.723c1.411,1.941,3.666,3.089,6.066,3.089h194.246
	c2.4,0,4.654-1.148,6.066-3.089C211.198,208.165,211.595,205.666,210.856,203.383z M106.596,15c28.813,0,52.254,23.444,52.254,52.26
	c0,46.04-39.284,79.696-52.262,89.557C93.6,146.983,54.346,113.433,54.346,67.26C54.346,38.444,77.785,15,106.596,15z
	 M19.789,198.195l20.829-64.277h22.295c17.32,23.623,38.092,37.444,39.58,38.417c1.247,0.815,2.675,1.222,4.104,1.222
	c1.429,0,2.857-0.407,4.104-1.222c1.486-0.972,22.261-14.794,39.582-38.417h22.297l20.828,64.277H19.789z"
                            />
                        </svg>{' '}
                        The shops
                    </Link>
                </div>

                <form className={styles.mobileSearchForm}>
                    <Search />
                </form>
            </div>
        </div>
    );
};

export default HeaderMenu;
