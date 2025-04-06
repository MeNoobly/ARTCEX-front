import {
    Brush,
    ChildCare,
    Groups,
    LocationOn,
    MenuBook,
    MonetizationOn,
    Movie,
    MusicNote,
    Schedule,
    TheaterComedy,
} from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Divider,
    keyframes,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import React from 'react'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const MasterClasses = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const workshops = [
        {
            title: 'Вокально-инструментальная мастерская «Музыкальный квартал»',
            day: 'По понедельникам',
            time: '19:30 - 21:00',
            age: '18+ лет',
            room: 'Аудитория 2.9',
            price: '1500 руб',
            icon: <MusicNote color="primary" />,
            details: [
                'Постановка голоса',
                'Вокальные техники',
                'Развитие чувства ритма',
                'Артикуляция',
                'Репертуар на русском и английском языках',
                'Игра на гитаре, укулеле, фортепиано',
            ],
            requirements: 'Тех. райдер: 2 микрофона, стойки, колонка или пульт',
            teachers: 'Педагоги: Татьяна Смольская, Оксана Цехович',
            image: 'https://source.unsplash.com/random/800x600/?music',
        },
        {
            title: 'Мастер-классы от Киношколы АРТЦЕХ',
            day: 'По субботам и воскресеньям',
            time: 'Суббота: 12:00 - 14:00\nВоскресенье: 15:30 - 17:30',
            age: '7+ и 18+ лет',
            room: 'Аудитория 2.9 / 2.1',
            price: '1500 руб',
            icon: <Movie color="secondary" />,
            details: [
                'Сценарное мастерство',
                'Режиссура/основы монтажа',
                'Работа с актером',
                'Работа на камеру',
                'Анализ фильмов',
                'История кино',
            ],
            requirements:
                'Нужно: экран или телевизор для показа отрывков из фильмов',
            teachers: 'Педагоги-режиссеры: Оксана Цехович, Екатерина Толкунова',
            image: 'https://source.unsplash.com/random/800x600/?cinema',
        },
        {
            title: 'Мастерская режиссуры «Сквозное действие»',
            day: 'По вторникам',
            time: '20:00 - 21:45',
            age: '18+ лет',
            room: 'Аудитория 1.4',
            price: '1500 руб',
            icon: <TheaterComedy color="success" />,
            details: [
                'Читка и анализ пьесы А.П. Чехова «Чайка»',
                'Метод действенного анализа К.С. Станиславского',
                'Разбор событийного ряда пьесы',
                'Распределение ролей',
                'Этюды к образу',
                'Сквозное действие роли',
                'Исполнение отрывков',
            ],
            teachers: 'Педагог-режиссер: Оксана Цехович',
            image: 'https://source.unsplash.com/random/800x600/?theater',
        },
        {
            title: 'Театр перформативных практик',
            day: 'По пятницам',
            time: '20:00 - 21:30',
            age: '18+ лет',
            room: 'Аудитория 1.4 / 1.3',
            price: '1500 руб',
            icon: <MenuBook color="action" />,
            details: [
                'Актерское мастерство',
                'Ораторское искусство',
                'Сценическое движение',
                'Сторителлинг',
                'Погружение в мир автора',
            ],
            teachers: 'Педагоги-режиссеры: Оксана Цехович, Екатерина Толкунова',
            image: 'https://source.unsplash.com/random/800x600/?performance',
        },
        {
            title: 'Интерактивная сказка',
            day: 'По субботам',
            time: '11:00 - 11:50',
            age: '2-6 лет + родители',
            room: 'Аудитория 1.4',
            price: '1500 руб',
            icon: <ChildCare color="primary" />,
            details: [
                'Игровой тренинг',
                'Развитие воображения',
                'Тренировка памяти',
                'Работа со словом и текстами',
                'Музыкальные импровизации',
            ],
            teachers: 'Педагоги: Оксана Цехович, Екатерина Толкунова',
            image: 'https://source.unsplash.com/random/800x600/?kids',
        },
        {
            title: 'Графический дневник. Комикс. Анимация',
            day: 'По субботам',
            time: '16:00 - 18:00 (7-14 лет)\n18:00 - 20:00 (14+ лет)',
            age: '7+ и 18+ лет',
            room: 'Аудитория 1.4',
            price: '1500 руб',
            icon: <Brush color="secondary" />,
            details: [
                'Сторителлинг',
                'Основы рисунка и скетчинга',
                'Создание персонажей',
                'Основы анимационного движения',
                'Основы режиссуры',
            ],
            teachers: 'Педагог-режиссер: Василиса Цехович',
            image: 'https://source.unsplash.com/random/800x600/?comics',
        },
    ]

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Заголовок */}
            <Typography
                gutterBottom
                variant={isMobile ? 'h3' : 'h2'}
                component="h1"
                sx={{
                    fontWeight: 700,
                    color: '#18092C',
                    animation: `${fadeIn} 1s ease-out`,
                    textAlign: 'center',
                    mb: 4,
                }}
            >
                Мастер-классы мастерской театра и кино АРТЦЕХ
            </Typography>

            {/* Список мастер-классов */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                    gap: 4,
                    mb: 6,
                }}
            >
                {workshops.map((workshop, index) => (
                    <Card
                        key={index}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: theme.shadows[6],
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={workshop.image}
                            alt={workshop.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                            >
                                {workshop.icon}
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{ ml: 1 }}
                                >
                                    {workshop.title}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                    mb: 2,
                                }}
                            >
                                <Chip
                                    icon={<Schedule />}
                                    label={workshop.day}
                                    variant="outlined"
                                    size="small"
                                />
                                <Chip
                                    icon={<Groups />}
                                    label={workshop.age}
                                    variant="outlined"
                                    size="small"
                                />
                                <Chip
                                    icon={<LocationOn />}
                                    label={workshop.room}
                                    variant="outlined"
                                    size="small"
                                />
                                <Chip
                                    icon={<MonetizationOn />}
                                    label={workshop.price}
                                    color="success"
                                    size="small"
                                />
                            </Box>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {workshop.time.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography paragraph variant="body1">
                                <strong>Программа:</strong>
                            </Typography>
                            <ul
                                style={{
                                    paddingLeft: 20,
                                    marginTop: 0,
                                    marginBottom: 16,
                                }}
                            >
                                {workshop.details.map((item, i) => (
                                    <li key={i}>
                                        <Typography variant="body2">
                                            {item}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>

                            {workshop.requirements && (
                                <>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <strong>Требования:</strong>{' '}
                                        {workshop.requirements}
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                </>
                            )}

                            <Typography variant="body2">
                                <strong>{workshop.teachers}</strong>
                            </Typography>
                        </CardContent>
                        <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                sx={{
                                    borderRadius: 3,
                                    py: 1,
                                }}
                            >
                                Записаться
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Box>

            {/* Призыв к действию */}
            <Card
                sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: 'common.white',
                    p: 4,
                    textAlign: 'center',
                    mb: 4,
                }}
            >
                <Typography gutterBottom variant="h5">
                    Хотите развиваться творчески?
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Выберите подходящий мастер-класс и оставьте заявку прямо
                    сейчас!
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        borderRadius: 3,
                    }}
                >
                    Оставить заявку
                </Button>
            </Card>
        </Container>
    )
}

export default MasterClasses
