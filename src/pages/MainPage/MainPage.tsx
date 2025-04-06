import { FC } from 'react'

import { Card, ImageSlider } from '@/shared'
import { cards } from '@/shared/consts/cards'

import styles from './MainPage.module.scss'

export const MainPage: FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Мастерская театра и кино АРТЦЕХ
                </h1>
                <div style={{ marginBottom: '20px' }}>
                    <ImageSlider />
                </div>
                <div className={styles.cardsContainer}>
                    {cards?.map((card) => <Card key={card?.id} card={card} />)}
                </div>
                <div className={styles.textBlock}>
                    АРТЦЕХ — это площадка для творчества и развития личности
                    подростков от 10 до 18 лет. Мы учим писать сценарии, снимать
                    и монтировать фильмы, записывать звук и фотографировать.
                </div>
            </div>
        </div>
    )
}
