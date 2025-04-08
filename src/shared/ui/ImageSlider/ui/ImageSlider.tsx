import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { FC } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './ImageSlider.module.scss'

export const ImageSlider: FC = () => {
    const imagesPaths = [
        '/img/main/intro/1.jpg',
        '/img/main/intro/2.jpg',
        '/img/main/intro/3.jpg',
        '/img/main/intro/4.jpg',
        '/img/main/intro/5.jpg',
        '/img/main/intro/6.jpg',
        '/img/main/intro/7.jpg',
    ]

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
                {imagesPaths?.map((path, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slide}>
                            <img
                                src={path}
                                alt={`Интро ${index + 1}`}
                                className={styles.img}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
