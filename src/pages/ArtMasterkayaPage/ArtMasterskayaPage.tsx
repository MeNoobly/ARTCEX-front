import {
    Brush,
    ColorLens,
    GridOn,
    Palette,
    Star,
    Texture,
} from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    ImageList,
    ImageListItem,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'

const ArtWorkshop = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    // Галерея работ
    const galleryImages = [
        {
            img: 'https://source.unsplash.com/random/600x400/?drawing',
            title: 'Графика',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?watercolor',
            title: 'Акварель',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?oil-painting',
            title: 'Масло',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?sketch',
            title: 'Эскиз',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?illustration',
            title: 'Иллюстрация',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?comics',
            title: 'Комикс',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?portrait',
            title: 'Портрет',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?abstract',
            title: 'Абстракция',
        },
        {
            img: 'https://source.unsplash.com/random/600x400/?landscape',
            title: 'Пейзаж',
        },
    ]

    const programs = [
        {
            title: 'Основы рисунка',
            icon: <GridOn color="primary" />,
            description: 'Изучение композиции, перспективы, светотени',
            image: 'https://source.unsplash.com/random/600x400/?drawing-techniques',
        },
        {
            title: 'Живопись',
            icon: <Palette color="secondary" />,
            description: 'Работа с акварелью, гуашью, акрилом и маслом',
            image: 'https://source.unsplash.com/random/600x400/?painting',
        },
        {
            title: 'Скетчинг',
            icon: <Brush color="success" />,
            description: 'Быстрые зарисовки и городские скетчи',
            image: 'https://source.unsplash.com/random/600x400/?sketching',
        },
        {
            title: 'Иллюстрация',
            icon: <ColorLens color="action" />,
            description: 'Создание персонажей и книжных иллюстраций',
            image: 'https://source.unsplash.com/random/600x400/?illustration',
        },
        {
            title: 'Текстуры и фактуры',
            icon: <Texture color="primary" />,
            description: 'Эксперименты с материалами и техниками',
            image: 'https://source.unsplash.com/random/600x400/?texture-art',
        },
        {
            title: 'Авторский стиль',
            icon: <Star color="secondary" />,
            description: 'Развитие индивидуального художественного почерка',
            image: 'https://source.unsplash.com/random/600x400/?art-style',
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
                    АРТ-МАСТЕРСКАЯ
                </Typography>
                <Typography gutterBottom variant="h5">
                    Пространство для творчества и самовыражения
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
                        mt: 2,
                    }}
                >
                    Записаться
                </Button>
            </Box>

            {/* Галерея работ */}
            <Typography gutterBottom variant="h4" component="h2" sx={{ mb: 3 }}>
                Наши работы
            </Typography>
            <ImageList
                cols={isMobile ? 2 : 3}
                gap={16}
                sx={{ mb: 6 }}
                variant="masonry"
            >
                {galleryImages.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderRadius: 8 }}
                        />
                        <Typography
                            variant="caption"
                            sx={{
                                display: 'block',
                                textAlign: 'center',
                                mt: 1,
                            }}
                        >
                            {item.title}
                        </Typography>
                    </ImageListItem>
                ))}
            </ImageList>

            {/* Программы обучения */}
            <Typography gutterBottom variant="h4" component="h2" sx={{ mb: 3 }}>
                Направления обучения
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    },
                    gap: 3,
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
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: theme.shadows[6],
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={program.image}
                            alt={program.title}
                            sx={{
                                filter: 'brightness(0.9)',
                                '&:hover': {
                                    filter: 'brightness(1)',
                                },
                            }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1,
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
                            <Typography variant="body2" color="text.secondary">
                                {program.description}
                            </Typography>
                        </CardContent>
                        <Box sx={{ p: 2 }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                size="small"
                            >
                                Подробнее
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Box>

            {/* О мастерской */}
            <Card sx={{ mb: 6 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box sx={{ flex: 1, p: 4 }}>
                        <Typography gutterBottom variant="h5">
                            О нашей мастерской
                        </Typography>
                        <Typography paragraph>
                            Профессиональная студия для художников всех уровней.
                            Мы предлагаем:
                        </Typography>
                        <ul>
                            <li>
                                <Typography>
                                    Занятия для начинающих и продвинутых
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Индивидуальный подход к каждому ученику
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Современные материалы и оборудование
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Выставки и творческие встречи
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Уютную атмосферу для вдохновения
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image="https://source.unsplash.com/random/800x600/?art-studio"
                            alt="Арт-мастерская"
                            sx={{ height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                </Box>
            </Card>

            {/* Призыв к действию */}
            <Box
                sx={{
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                    color: 'common.white',
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <Typography gutterBottom variant="h4">
                    Начните свой творческий путь сегодня!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Запишитесь на пробное занятие и погрузитесь в мир искусства
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
                    Записаться на пробное занятие
                </Button>
            </Box>
        </Container>
    )
}

export default ArtWorkshop
