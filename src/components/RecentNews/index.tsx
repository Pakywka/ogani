import styles from './RecentNews.module.scss';

export const RecentNews = () => {
    return (
        <div className="recent_news">
            <h4>Recent News</h4>
            <div className={styles.recent_items__wrapper}>
                <a href="#s" className={styles.recent__item}>
                    <div className={styles.recent__item__pic}>
                        <img src="img/blog/sidebar/sr-1" alt="" />
                    </div>
                    <div className={styles.recent__item__text}>
                        <h6>
                            09 Kinds Of Vegetables
                            <br /> Protect The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                    </div>
                </a>
                <a href="#s" className={styles.recent__item}>
                    <div className={styles.recent__item__pic}>
                        <img src="img/blog/sidebar/sr-2" alt="" />
                    </div>
                    <div className={styles.recent__item__text}>
                        <h6>
                            Tips You To Balance
                            <br /> Nutrition Meal Day
                        </h6>
                        <span>MAR 05, 2019</span>
                    </div>
                </a>
                <a href="#s" className={styles.recent__item}>
                    <div className={styles.recent__item__pic}>
                        <img src="img/blog/sidebar/sr-3" alt="" />
                    </div>
                    <div className={styles.recent__item__text}>
                        <h6>
                            4 Principles Help You Lose <br />
                            Weight With Vegetables
                        </h6>
                        <span>MAR 05, 2019</span>
                    </div>
                </a>
            </div>
        </div>
    );
};
