import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ICard } from '@/shared/consts/cards'

import styles from './Card.module.scss'

interface ICardProps {
    card: ICard
}
export const Card: FC<ICardProps> = (card) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(card?.card.to)
    }

    return (
        <div className={styles.card} onClick={handleCardClick}>
            <img src={card?.card.imgSrc} alt="Image" />
            <p>{card?.card.title}</p>
        </div>
    )
}
