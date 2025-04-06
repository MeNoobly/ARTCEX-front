import {
    AccessTime,
    Brush,
    DirectionsWalk,
    ExpandMore,
    Mic,
    Movie,
    MusicNote,
    Star,
    TheaterComedy,
} from '@mui/icons-material'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'

const SummerCamp = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const sessions = [
        {
            month: 'ИЮНЬ',
            weeks: ['2-6 июня', '9-13 июня', '16-20 июня', '23-27 июня'],
        },
        {
            month: 'ИЮЛЬ',
            weeks: [
                '30 июня - 4 июля',
                '7-11 июля',
                '14-18 июля',
                '21-25 июля',
                '28 июля - 1 августа',
            ],
        },
        {
            month: 'АВГУСТ',
            weeks: [
                '4-8 августа',
                '11-15 августа',
                '18-22 августа',
                '25-29 августа',
            ],
        },
    ]

    const programs = [
        {
            title: 'Театральное направление «СЦЕНА»',
            icon: <TheaterComedy color="primary" />,
            quote: '«Актёр должен научиться трудное сделать привычным, привычное лёгким, а лёгкое прекрасным» - К.С. Станиславский',
            activities: [
                'Игровой тренинг',
                'Актерское мастерство',
                'Сценическая речь',
                'Сценическое движение',
                'Сторителлинг и стенд ап',
                'Постановка номеров и спектаклей',
            ],
            result: 'Выступление на сцене для близких и награждение',
            image: 'https://source.unsplash.com/random/800x600/?theater',
        },
        {
            title: 'Вокальное направление «ЗВУКИ МУЗЫКИ»',
            icon: <MusicNote color="secondary" />,
            quote: '«Любите и изучайте великое искусство музыки...» - Д.Д. Шостакович',
            activities: [
                'Работа над дикцией',
                'Распевки и развитие слуха',
                'Музицирование',
                'Выбор репертуара (поп, рок, джаз, мюзикл)',
                'Английский через песни',
                'Работа с микрофоном',
            ],
            result: 'Выступление на сцене для близких и награждение',
            image: 'https://source.unsplash.com/random/800x600/?music',
        },
        {
            title: 'Арт-мастерская',
            icon: <Brush color="success" />,
            quote: '«Рисовать — это как мечтать, только на бумаге» - А.Ф. Лосев',
            activities: [
                'Основы рисунка и живописи',
                'Работа с акварелью, гуашью, маркерами',
                'Постановка натюрмортов',
                'Скетчинг и иллюстрация',
                'Авторская работа',
            ],
            result: 'Выставка работ для близких и награждение',
            image: 'https://source.unsplash.com/random/800x600/?art',
        },
        {
            title: 'Анимация. Комикс. Графический дневник',
            icon: <Movie color="action" />,
            quote: '«Анимация - когда ты пытаешься отыскать ту линию, которая скрыта внутри тебя самого» - Хаяо Миядзаки',
            activities: [
                'Создание комиксов и графического дневника',
                'Основы рисунка и скетчинга',
                'Создание персонажей',
                'Работа с раскадровкой',
                'Основы анимационного движения',
                'История анимации',
            ],
            result: 'Выставка работ и показ на экране',
            image: 'https://source.unsplash.com/random/800x600/?animation',
        },
        {
            title: 'Кинокампус «ВОЛШЕБНЫЙ МИР КИНО»',
            icon: <Movie color="primary" />,
            quote: '«Кино – это жизнь, из которой вырезано всё скучное» - Альфред Хичкок',
            activities: [
                'Все этапы создания фильма',
                'Актерское мастерство и работа на камеру',
                'Написание сценария',
                'Создание раскадровки',
                'Режиссура и операторская работа',
                'Монтаж',
            ],
            result: 'Показ фильмов на экране и награждение',
            image: 'https://source.unsplash.com/random/800x600/?cinema',
        },
        {
            title: 'Современная хореография',
            icon: <DirectionsWalk color="secondary" />,
            quote: '«Танец — высший разум в свободнейшем из тел» - Айседора Дункан',
            activities: [
                'Пластическая выразительность',
                'Танцевальный сторителлинг',
                'Современная хореография',
                'Контемпорари и хип-хоп',
                'Постановка танцевальных номеров',
            ],
            result: 'Выступление на сцене и награждение',
            image: 'https://source.unsplash.com/random/800x600/?dance',
        },
        {
            title: 'Журналистика и блогинг',
            icon: <Mic color="success" />,
            quote: 'О светлом настоящем – журналисты - Жарко Петан',
            activities: [
                'Сценическая речь и актерское мастерство',
                'Работа на камеру',
                'Креативное письмо',
                'Съемка интервью и репортажей',
                'Сторис и рилсы',
                'Основы монтажа',
            ],
            result: 'Показ работ на экране и награждение',
            image: 'https://source.unsplash.com/random/800x600/?journalism',
        },
    ]

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Герой-секция */}
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 6,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: 'common.white',
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <Typography
                    gutterBottom
                    variant={isMobile ? 'h3' : 'h2'}
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        color: 'common.white',
                    }}
                >
                    АРТ-ЛЕТО 2025
                </Typography>
                <Typography gutterBottom variant="h5">
                    Летний лагерь для детей от 7 до 16 лет
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Культурный центр ЗИЛ и мастерская театра и кино АРТЦЕХ
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
                    Записаться в лагерь
                </Button>
            </Box>

            {/* О лагере */}
            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        О нашем летнем лагере
                    </Typography>
                    <Typography paragraph>
                        Смены мастерской театра и кино АРТЦЕХ под руководством
                        режиссера, актрисы и педагога Оксаны Витальевны Цехович.
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 3,
                            mb: 3,
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Typography gutterBottom variant="h6">
                                <AccessTime
                                    sx={{ verticalAlign: 'middle', mr: 1 }}
                                />
                                Режим дня
                            </Typography>
                            <ul>
                                <li>
                                    <Typography>
                                        10:00 - Встреча детей, игры на свежем
                                        воздухе
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        11:00-14:00 - Тематические занятия
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        14:00-15:30 - Обед и прогулка
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        15:30-17:30 - Мастер-классы и репетиции
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        17:30-18:00 - Игры на свежем воздухе
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography gutterBottom variant="h6">
                                <Star sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Преимущества
                            </Typography>
                            <Typography paragraph>
                                Можно выбрать смены по интересам ребенка (1 или
                                2 недели). Итогом каждой смены станет
                                выступление, выставка или показ работ.
                            </Typography>
                            <Typography>
                                С детьми работают профессиональные педагоги,
                                актеры, музыканты и художники.
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Смены */}
            <Typography
                gutterBottom
                variant="h4"
                component="h2"
                sx={{ mt: 4, mb: 3 }}
            >
                Даты смен
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    },
                    gap: 3,
                    mb: 6,
                }}
            >
                {sessions.map((session, index) => (
                    <Card key={index}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                color="primary"
                            >
                                {session.month}
                            </Typography>
                            <ul>
                                {session.weeks.map((week, i) => (
                                    <li key={i}>
                                        <Typography>{week}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Программы */}
            <Typography
                gutterBottom
                variant="h4"
                component="h2"
                sx={{ mt: 4, mb: 3 }}
            >
                Направления лагеря
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                    gap: 4,
                    mb: 6,
                }}
            >
                {programs.map((program, index) => (
                    <Card
                        key={index}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={program.image}
                            alt={program.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                            >
                                {program.icon}
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{ ml: 1 }}
                                >
                                    {program.title}
                                </Typography>
                            </Box>

                            <Typography
                                gutterBottom
                                variant="body2"
                                color="text.secondary"
                                fontStyle="italic"
                            >
                                {program.quote}
                            </Typography>

                            <Accordion sx={{ mt: 2 }}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography>Программа занятий</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        {program.activities.map(
                                            (activity, i) => (
                                                <li key={i}>
                                                    <Typography variant="body2">
                                                        {activity}
                                                    </Typography>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            <Typography variant="body1" sx={{ mt: 2 }}>
                                <strong>Итог смены:</strong> {program.result}
                            </Typography>
                        </CardContent>
                        <Box sx={{ p: 2, textAlign: 'center' }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                            >
                                Выбрать смену
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Box>

            {/* Призыв к действию */}
            <Card
                sx={{
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                    color: 'common.white',
                    p: 4,
                    textAlign: 'center',
                    mb: 4,
                }}
            >
                <Typography gutterBottom variant="h4">
                    Запишите ребенка в наш летний лагерь!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Подарите ему незабываемое лето, полное творчества, дружбы и
                    новых открытий!
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

export default SummerCamp
