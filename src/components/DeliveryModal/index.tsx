import React, { FC } from 'react';
import { ModalOverlay } from '../ModalOverlay';
import styles from './DeliveryModal.module.scss';

type DeliveryModalProps = {
    setShow: any;
};

export const DeliveryModal: FC<DeliveryModalProps> = ({ setShow }) => {
    const [value, setValue] = React.useState<string>('');

    const inputRef = React.useRef<HTMLInputElement>(null);
    const onClickClear = () => {
        setValue('');
        inputRef.current?.focus();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <>
            <ModalOverlay />
            <div className="modal-wrapper">
                <div className={styles.wrapper}>
                    <div className={styles.root}>
                        <button onClick={() => setShow(false)} className={styles.btnModalHidden}>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="#FFFFFF">
                                <path
                                    d="M5 5l14 14M5 19L19 5"
                                    stroke="#FFFFFF"
                                    stroke-width="3"
                                    stroke-linecap="round"></path>
                            </svg>
                        </button>
                        <div className={styles.contentWrapper}>
                            <div className={styles.map}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.7570118582908!2d-73.98485388386011!3d40.78935584081522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25884ffc35b31%3A0xe3459aa46ddd2e83!2zSHVkc29uIFJpdmVyIEdyZWVud2F5LCBOZXcgWW9yaywgTlksINCh0KjQkA!5e0!3m2!1sru!2sru!4v1662735498438!5m2!1sru!2sru"
                                    style={{ border: 0 }}
                                    height="100%"
                                    width="100%"
                                    loading="lazy"></iframe>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.content__top}>
                                    <div className={styles.top_title}>Enter your address</div>
                                    <p>
                                        To find the store closest to you and see up-to-date
                                        information on the availability of goods.
                                    </p>
                                </div>
                                <div className={styles.searchWrapper}>
                                    <div className={styles.address_search__label}>
                                        <span className={styles.address_search__label_text}>
                                            City, street, house
                                        </span>
                                    </div>
                                    <div className={styles.address_search}>
                                        <div className={styles.searchInput}>
                                            <input
                                                ref={inputRef}
                                                value={value}
                                                onChange={onChangeInput}
                                                placeholder="Enter an address to find nearby stores"
                                                type="text"
                                            />
                                        </div>
                                        {value && (
                                            <button
                                                onClick={onClickClear}
                                                className={styles.btnSearchClear}>
                                                <span className="button-icon">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        color="#50b946">
                                                        <path
                                                            d="M5 5l14 14M5 19L19 5"
                                                            stroke="#50b946"
                                                            stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
