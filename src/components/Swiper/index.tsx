import React from 'react';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper.scss';

type SwiperSliderProps = {
    array: JSX.Element[];
    slidesPerView: number;
    direction: 'horizontal' | 'vertical';
    navigation: boolean;
    pagination: any;
    rows: number;
};

export const SwiperSlider: React.FC<SwiperSliderProps> = ({
    array,
    slidesPerView,
    direction,
    navigation,
    pagination,
    rows,
}) => {
    const sliderItems = array.map((obj, i) => <SwiperSlide key={i}>{obj}</SwiperSlide>);
    return (
        <Swiper
            spaceBetween={window.innerWidth < 576 ? 15 : 30}
            slidesPerView={slidesPerView}
            direction={direction}
            grid={{ rows: rows }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={navigation}
            pagination={pagination}
            modules={[Autoplay, Pagination, Navigation, Grid]}
            className="mySwiper">
            {sliderItems}
        </Swiper>
    );
};
