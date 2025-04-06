import { keyframes } from '@emotion/react'
import {
    ExpandMore,
    Groups,
    MonetizationOn,
    Movie,
    Schedule,
    TheaterComedy,
} from '@mui/icons-material'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Divider,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'

// Анимация для заголовка
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

// Изображения (замените на реальные)
const mainImage = 'https://source.unsplash.com/random/800x600/?film'
// const actingImage = 'https://source.unsplash.com/random/800x600/?acting'
const filmingImage = 'https://source.unsplash.com/random/800x600/?filming'
// const portfolioImage = 'https://source.unsplash.com/random/800x600/?portfolio'

const CinemaSchool = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const ageGroups = [
        {
            label: '7-11 лет',
            icon: <Groups color="primary" />,
            description: 'Актерская мастерская, основы драматургии',
        },
        {
            label: '12-17 лет',
            icon: <TheaterComedy color="secondary" />,
            description: 'Полный цикл кинопроизводства',
        },
        {
            label: '18+ лет',
            icon: <Movie color="success" />,
            description: 'Профессиональная подготовка',
        },
    ]

    const scheduleGroups = [
        { name: 'Группа 1', days: 'Пн-Чт 18:30-20:00', age: '10-17 лет' },
        { name: 'Группа 2', days: 'Вт-Пт 18:00-19:30', age: '10-17 лет' },
        { name: 'Группа 3', days: 'Сб 12:00-15:30', age: '7-17 лет' },
        { name: 'Группа 4', days: 'Сб 12:00-15:30', age: '18+ лет' },
        { name: 'Группа 5', days: 'Вс 14:00-17:30', age: '7-17 лет' },
        { name: 'Группа 6', days: 'Вс 14:00-17:30', age: '18+ лет' },
    ]

    const benefits = [
        'Полный цикл создания фильма',
        'Актерское мастерство и работа на камеру',
        'Съемка портфолио и видеовизитки',
        'Мастер-классы от профессионалов',
        'Экскурсии на Мосфильм',
        'Участие в питчингах',
        'Практика в разных кинопрофессиях',
        'Закрытая группа в Telegram с материалами',
        'Выездные экскурсии и кинокампус',
    ]

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Герой-секция */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on medium and larger
                    alignItems: 'center',
                    mb: 6,
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' }, // Full width on small screens, half on medium and larger
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center', // Center the text for the mobile view
                    }}
                >
                    <Typography
                        gutterBottom
                        variant={isMobile ? 'h3' : 'h2'}
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            animation: `${fadeIn} 1s ease-out`,
                            color: '#18092C',
                            textAlign: 'inherit', // Use the text alignment of the parent Box
                        }}
                    >
                        Киношкола мастерской театра и кино АРТЦЕХ
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        Кастинг на актерское направление 7+ / 12+ / 18+
                    </Typography>
                    <Typography variant="body1">
                        Март - май 2025 | Будние дни: 18:30 | Суббота: 12:00 /
                        14:00 | Воскресенье: 15:30
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        startIcon={<Movie />}
                        sx={{ mt: 2 }}
                        fullWidth={isMobile}
                    >
                        Записаться на кастинг
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' }, // Adjust width as per the screen size
                        display: 'flex',
                        justifyContent: 'center', // Center the Card component horizontally
                        pt: { xs: 2, md: 0 }, // Add a top padding on small screens
                    }}
                >
                    <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                        <CardMedia
                            component="img"
                            height={isMobile ? 300 : 400}
                            image={mainImage}
                            alt="Киношкола АРТЦЕХ"
                        />
                    </Card>
                </Box>
            </Box>

            {/* Возрастные группы */}
            <Typography
                gutterBottom
                variant="h4"
                component="h2"
                sx={{ mt: 6, mb: 3 }}
            >
                Направления обучения
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    mb: 6,
                    '& > *': {
                        flex: '1 1 300px',
                        minWidth: 0,
                    },
                }}
            >
                {ageGroups.map((group, index) => (
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
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                            >
                                {group.icon}
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{ ml: 1 }}
                                >
                                    {group.label}
                                </Typography>
                            </Box>
                            <Typography>{group.description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Подробнее
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            {/* Преимущества */}
            <Typography
                gutterBottom
                variant="h4"
                component="h2"
                sx={{ mt: 6, mb: 3 }}
            >
                Наши цели и задачи
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    mb: 6,
                    '& > *': {
                        flex: '1 1 300px',
                        minWidth: 0,
                    },
                }}
            >
                {benefits.map((benefit, index) => (
                    <Card
                        key={index}
                        sx={{
                            height: '100%',
                            bgcolor:
                                index % 2 === 0
                                    ? 'background.paper'
                                    : 'primary.light',
                            color: index % 2 === 0 ? 'inherit' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            minHeight: 100,
                        }}
                    >
                        <CardContent
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Chip label={index + 1} color="primary" />
                            <Typography>{benefit}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Расписание */}
            <Typography
                gutterBottom
                variant="h4"
                component="h2"
                sx={{ mt: 6, mb: 3 }}
            >
                Расписание групп
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    mb: 6,
                    '& > *': {
                        flex: '1 1 300px',
                        minWidth: 0,
                    },
                }}
            >
                {scheduleGroups.map((group, index) => (
                    <Card
                        key={index}
                        sx={{
                            height: '100%',
                            borderLeft: `4px solid ${theme.palette.secondary.main}`,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h6">
                                {group.name}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1,
                                }}
                            >
                                <Schedule color="action" sx={{ mr: 1 }} />
                                <Typography>{group.days}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Groups color="action" sx={{ mr: 1 }} />
                                <Typography>{group.age}</Typography>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="secondary">
                                Записаться
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            {/* Дополнительная информация */}
            <Accordion sx={{ mb: 3 }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">
                        Что входит в программу?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 2,
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <CardMedia
                                component="img"
                                height={isMobile ? 200 : 300}
                                image={filmingImage}
                                alt="Съемочный процесс"
                                sx={{
                                    borderRadius: 2,
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography paragraph>
                                Программа направлена на формирование творческой
                                индивидуальности, получение знаний и навыков в
                                области киноискусства, освоение полного цикла
                                съемочного процесса, создание авторских работ,
                                подготовке к профессиональной деятельности.
                            </Typography>
                            <Typography paragraph>
                                Наши студийцы проходят все этапы создания фильма
                                от идеи до выпуска на экран. В киношколе есть
                                актерское агентство и размещение на сайте
                                студии, мы сотрудничаем с кастинг-директорами и
                                студиями.
                            </Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Цены */}
            <Card
                sx={{
                    mt: 4,
                    background:
                        'linear-gradient(135deg, rgb(86, 32, 99) 0%, rgb(24, 9, 44) 100%)',
                    color: 'common.white',
                }}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Стоимость обучения
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 2,
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1,
                                }}
                            >
                                <MonetizationOn sx={{ mr: 1 }} />
                                <Typography>
                                    Абонемент в месяц: 12 000 руб.
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ pl: 4 }}>
                                Включает 8 занятий, съемки и материалы
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1,
                                }}
                            >
                                <MonetizationOn sx={{ mr: 1 }} />
                                <Typography>
                                    Разовое занятие: 2 000 руб. (будни), 3 500
                                    руб. (выходные)
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ pl: 4 }}>
                                Первое пробное занятие со скидкой 50%
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
                    <Typography variant="body2">
                        В стоимость входят съемка актерского портфолио,
                        постановка в актерское агентство, съемка видеовизиток,
                        тематические съемки, интервью, клипы, съемка
                        короткометражных фильмов.
                    </Typography>
                </CardContent>
            </Card>

            {/* Кнопка записи */}
            <Box
                sx={{
                    mt: 6,
                    display: 'flex',
                    justifyContent: 'center',
                    animation: `${fadeIn} 1s ease-out`,
                }}
            >
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    startIcon={<Movie />}
                    sx={{
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        borderRadius: 3,
                        width: isMobile ? '100%' : 'auto',
                    }}
                >
                    Записаться в киношколу
                </Button>
            </Box>
        </Container>
    )
}

export default CinemaSchool
