import { FC } from 'react'

import { ImageSlider } from '../shared/ui/ImageSlider'
import { Navbar } from '../shared/ui/Navbar'
import { ProfileCard } from '../shared/ui/ProfileCard'
import { SharedInfo } from '../shared/ui/SharedInfo'
import { Join } from '../widgets/Join'
import styles from './App.module.scss'

const App: FC = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Мастерская театра и кино «Артцех»
                </h1>
                <div style={{ marginBottom: '20px' }}>
                    <ImageSlider />
                </div>
                <Join />
                <div>
                    <SharedInfo />
                </div>
                <div>
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}

export default App
