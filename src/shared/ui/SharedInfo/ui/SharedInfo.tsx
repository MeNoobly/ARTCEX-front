import ScheduleIcon from '@mui/icons-material/Schedule'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

import { Join } from '../../../../widgets/Join'

export const SharedInfo: React.FC = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image="https://via.placeholder.com/800x300.png?text=%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%A2%D0%B5%D0%B0%D1%82%D1%80%D0%B0+%D0%B8+%D0%9A%D0%B8%D0%BD%D0%BE"
                    alt="Мастерская Театра и Кино"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        Мастерская театра и кино АРТЦЕХ
                    </Typography>
                    <Typography paragraph variant="body1">
                        Большой творческий коллектив, театр-студия и киношкола
                        для детей и взрослых под руководством режиссёра,
                        актрисы, педагога Цехович Оксаны Витальевны. Участники
                        мастерской - победители, лауреаты и участники
                        международных и городских фестивалей. Студия открыта для
                        детей, подростков и взрослых.
                    </Typography>
                    <Typography variant="h6">Группы:</Typography>
                    <Typography variant="body1">3+/6+/12+/16+/18+</Typography>
                </CardContent>
            </Card>

            {/* История создания */}
            <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        История создания
                    </Typography>
                    <Typography paragraph variant="body1">
                        Мастерская театра и кино АРТЦЕХ началась в 2011 году с
                        сотрудничества с Домом Журналиста и Центром имени В. С.
                        Высоцкого. Сейчас студии работают в культурных центрах,
                        и уже более 10 лет мастерская организовывает
                        образовательные программы, курсы, мастер-классы,
                        спектакли и концерты.
                    </Typography>
                </CardContent>
            </Card>

            {/* Преимущества */}
            <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Почему стоит выбрать АРТЦЕХ?
                    </Typography>
                    <Typography variant="body1" component="ul">
                        <li>Развитие творческих способностей.</li>
                        <li>Развитие лидерских навыков.</li>
                        <li>
                            Подготовка к профессиональной деятельности в кино и
                            театре.
                        </li>
                        <li>Подготовка в театральные вузы.</li>
                        <li>
                            Участие в фестивалях, конкурсах, спектаклях и
                            съемках.
                        </li>
                        <li>
                            Дружный коллектив педагогов, выпускников, родителей
                            и учеников.
                        </li>
                    </Typography>
                </CardContent>
            </Card>

            {/* Методика */}
            <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Методика проведения занятий
                    </Typography>
                    <Typography paragraph variant="body1">
                        Занятия направлены на профессиональную подготовку,
                        развитие творческого потенциала и индивидуальных
                        способностей. Программа включает освоение двигательных и
                        телесно-ориентированных техник, развитие способности к
                        импровизации, художественно-словесной выразительности и
                        творческого мышления.
                    </Typography>
                    <Typography paragraph variant="body1">
                        Основные предметы: актерское мастерство, сценическая
                        речь, вокал, хореография, игра на музыкальных
                        инструментах, основы режиссуры и драматургии.
                    </Typography>
                </CardContent>
            </Card>

            {/* Расписание */}
            <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Расписание
                    </Typography>
                    <Box>
                        <Typography variant="h6">
                            КЦ им. И. М. Астахова
                        </Typography>
                        <Typography variant="body1">
                            <ScheduleIcon fontSize="small" /> Понедельник: 18:00
                            - 21:00 (7-17 лет)
                        </Typography>
                        <Typography variant="body1">
                            <ScheduleIcon fontSize="small" /> Четверг: 17:30 -
                            20:00 (3-11 лет)
                        </Typography>
                        <Typography variant="body1">
                            <ScheduleIcon fontSize="small" /> Суббота: 16:00 -
                            20:00 (7-17 лет)
                        </Typography>
                        <Typography variant="body1">
                            <ScheduleIcon fontSize="small" /> Воскресенье: 10:00
                            - 14:00 (3-17 лет)
                        </Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography variant="h6">ТЦ Мост</Typography>
                        <Typography variant="body1">
                            Расписание формируется.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Запись и стоимость */}
            <Card sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Запишитесь на пробный урок
                    </Typography>
                    <Typography paragraph variant="body1">
                        Стоимость занятий – 6 000 руб. в месяц за 8 занятий.
                        Разовое занятие – 800 руб.
                    </Typography>
                    <Join isShort />
                </CardContent>
            </Card>
        </Box>
    )
}
