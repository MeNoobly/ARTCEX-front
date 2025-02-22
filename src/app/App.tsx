import { FC } from 'react'

import { Card, ImageSlider, Navbar } from '@/shared'
import { cards } from '@/shared/consts/cards'

import styles from './App.module.scss'

const App: FC = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Мастерская театра и кино АРТЦЕХ
                </h1>
                <div style={{ marginBottom: '20px' }}>
                    <ImageSlider />
                </div>
                <div
                    style={{
                        maxWidth: '70vw',
                        display: 'grid',
                        gap: '20px',
                        gridTemplateColumns: '1fr 1fr',
                    }}
                >
                    {cards?.map((card) => <Card key={card?.id} card={card} />)}
                </div>
                <div className={styles.textBlock}>
                    АРТЦЕХ — это площадка для творчества и развития личности
                    подростков от 10 до 18 лет. Мы учим писать сценарии, снимать
                    и монтировать фильмы, записывать звук и фотографировать.
                </div>
                {/* <Join />     */}
                {/* <div>
                    <SharedInfo />
                </div>
                <div>
                    <ProfileCard />
                </div> */}
            </div>
        </div>
    )
}

export default App
