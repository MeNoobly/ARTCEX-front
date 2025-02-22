import { FC } from 'react'

import { ICard } from '@/shared/consts/cards'

import styles from './Card.module.scss'

interface ICardProps {
    card: ICard
}
export const Card: FC<ICardProps> = (card) => {
    return (
        <div className={styles.card}>
            <img src={card?.card.imgSrc} alt="Image" />
            <p>{card?.card.title}</p>
        </div>
    )
}
