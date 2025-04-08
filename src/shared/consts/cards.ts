export interface ICard {
    id: number
    imgSrc: string
    title: string
    to: string
}

export const cards: ICard[] = [
    // {
    //     id: 1,
    //     imgSrc: '/img/3.jpg',
    //     title: 'Театр-студия',
    //     to: '/theater-studio',
    // },
    {
        id: 2,
        imgSrc: '/img/main/links/1.jpg',
        title: 'Киношкола',
        to: '/cinema-school',
    },
    {
        id: 3,
        imgSrc: '/img/main/links/1.jpg',
        title: 'Арт-мастерская',
        to: '/art-masterskaya',
    },
    // { id: 4, imgSrc: '/img/3.jpg', title: 'Вокал', to: '/vocal' },
    {
        id: 5,
        imgSrc: '/img/3.jpg',
        title: 'Мастер-классы',
        to: '/master-classes',
    },
    { id: 6, imgSrc: '/img/3.jpg', title: 'Летний лагерь', to: '/summer-camp' },
    // { id: 7, imgSrc: '/img/3.jpg', title: 'События', to: '/events' },
    // { id: 8, imgSrc: '/img/3.jpg', title: 'Контакты', to: '/contacts' },
]
