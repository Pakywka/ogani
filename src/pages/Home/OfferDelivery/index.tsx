import React from 'react';

import styles from './OfferDelivery.module.scss';

export const OfferDelivery: React.FC = () => {
    return (
        <section className={styles.root}>
            <p className={styles.offerText}>
                Get your favorite products in a way convenient for you
            </p>
            <ul>
                <li>
                    <button className={styles.item}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#161616">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.5 20.6a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zm0 1.9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-13-1.9a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zm0 1.9a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                                fill="#161616"></path>
                            <rect
                                x="6.09"
                                y="7.54"
                                width="5.72"
                                height="3.66"
                                rx="0.67"
                                transform="rotate(-45 6.1 7.54)"
                                fill="#161616"></rect>
                            <path
                                d="M16.25 6.93c.92 0 1.65-.76 1.65-1.72 0-.95-.73-1.71-1.65-1.71-.92 0-1.65.76-1.65 1.71 0 .96.73 1.72 1.65 1.72zm-1.3 4.95h3.2a.86.86 0 000-1.71h-2.08l-1.75-3.15a1.5 1.5 0 00-1.37-.76c-.46 0-.82.2-1.1.48l-3.4 3.52A1.6 1.6 0 008 11.4c0 .58.28 1.15.73 1.43l3.12 1.9-.9 3.67a.89.89 0 001.72.43L14 13.5l-3.62-2.1 2.57-2.76 2 3.24z"
                                fill="#161616"></path>
                        </svg>
                        <div className={styles.item__content}>
                            <span className={styles.metodName}>Delivery</span>
                            <span className={styles.metodSubtitle}>60 minutes • $1,99</span>
                        </div>
                    </button>
                </li>
                <li>
                    <button className={styles.item}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#161616">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 2a4 4 0 014 4h3a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h3a4 4 0 014-4zm0 1.5A2.5 2.5 0 009.5 6h5A2.5 2.5 0 0012 3.5zm-2 7.342C10 9.79 10.889 9 11.986 9c1.111 0 2 .79 2.014 1.842 0 .632-.278 1.066-.639 1.408L12 13.5l-1.361-1.25c-.361-.342-.639-.776-.639-1.408zm4 6.316C14 18.21 13.111 19 12.014 19c-1.111 0-2-.79-2.014-1.842 0-.632.278-1.066.639-1.408L12 14.5l1.361 1.25c.361.342.639.776.639 1.408zm3-3.172C17 12.89 16.21 12 15.158 12c-.632 0-1.066.278-1.408.639L12.5 14l1.25 1.361c.342.361.776.639 1.408.639C16.21 15.986 17 15.097 17 13.986zM8.842 16C7.79 16 7 15.111 7 14.014c0-1.111.79-2 1.842-2.014.632 0 1.066.278 1.408.639L11.5 14l-1.25 1.361c-.342.361-.776.639-1.408.639z"
                                fill="currentColor"></path>
                        </svg>
                        <div className={styles.item__content}>
                            <span className={styles.metodName}>Pickup</span>
                            <span className={styles.metodSubtitle}>Is free</span>
                        </div>
                    </button>
                </li>
                <li>
                    <button className={styles.item}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#161616">
                            <path
                                d="M3.53 5.97a2 2 0 011.46-.64h14.4a2 2 0 011.5.68l2.09 2.38a1 1 0 01.24.65v.81a2.15 2.15 0 01-4.26.38l-.2-1.09-.06.38A3 3 0 0115.75 12h-.53a3 3 0 01-2.95-2.48l-.07-.38-.06.38A3 3 0 019.18 12h-.52A3 3 0 015.7 9.52l-.06-.38-.18 1A2.25 2.25 0 011 9.75v-.7c0-.24.1-.48.27-.67l2.26-2.41z"
                                fill="#161616"></path>
                            <rect
                                x="4.33"
                                y="2"
                                width="15.56"
                                height="2.22"
                                rx="1.11"
                                fill="#161616"></rect>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.22 14.11a1 1 0 011-1H20a1 1 0 011 1V20a2 2 0 01-2 2h-1.33v-5.67a1 1 0 00-1-1h-1.34a1 1 0 00-1 1V22h-9.1a2 2 0 01-2-2v-5.89zm3.34 2.72c0-.83.67-1.5 1.5-1.5H9.5c.83 0 1.5.67 1.5 1.5v1.45c0 .83-.67 1.5-1.5 1.5H8.06a1.5 1.5 0 01-1.5-1.5v-1.45z"
                                fill="#161616"></path>
                        </svg>
                        <div className={styles.item__content}>
                            <span className={styles.metodName}>Store list</span>
                        </div>
                    </button>
                </li>
            </ul>
        </section>
    );
};
