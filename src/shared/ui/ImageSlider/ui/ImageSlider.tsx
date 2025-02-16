import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay' // Добавьте эту строку для стилей автопрокрутки

import { FC } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './ImageSlider.module.scss'

export const ImageSlider: FC = () => {
    return (
        <div className={styles.slider}>
            <Swiper
                navigation
                loop
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img
                            src="/img/1.webp"
                            alt="Image 1"
                            className={styles.img}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img
                            src="/img/2.jpg"
                            alt="Image 2"
                            className={styles.img}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
