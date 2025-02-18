import { FC } from 'react'

import styles from './Card.module.scss'

export const Card: FC = () => {
    return (
        <div className={styles.card}>
            <img src="/img/3.jpg" alt="Image" />
            <p>Киношкола</p>
        </div>
    )
}
