import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import PhoneIcon from '@mui/icons-material/Phone'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material'
import { FC } from 'react'

export const ProfileCard: FC = () => {
    return (
        <Card
            sx={{
                maxWidth: 800,
                margin: '20px 0',
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            {/* Фото */}
            <CardMedia
                component="img"
                height="300"
                image="https://via.placeholder.com/800x300.png?text=%D0%A4%D0%BE%D1%82%D0%BE+%D0%9E%D0%BA%D1%81%D0%B0%D0%BD%D1%8B+%D0%A6%D0%B5%D1%85%D0%BE%D0%B2%D0%B8%D1%87"
                alt="Оксана Цехович"
            />

            {/* Контент */}
            <CardContent>
                <Typography gutterBottom variant="h4">
                    Оксана Цехович
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                >
                    Руководитель, режиссер, актриса, педагог
                </Typography>

                {/* Описание */}
                <Typography paragraph variant="body1">
                    <b>
                        Высшее педагогическое, актерское, режиссерское
                        образование.
                    </b>{' '}
                    Выпускница ТИ им. Б. Щукина. Режиссер-постановщик
                    спектаклей:
                    <i>
                        {' '}
                        "Лавстория", "До третьих петухов", "Шоколад на крутом
                        кипятке", "Фаина. Одесская история", "Три девушки в
                        голубом", "Русский репортер", "Переходы", "Ежик в
                        тумане", "Семейные мифы", "Без монет нет конфет"
                    </i>{' '}
                    и др.
                </Typography>
                <Typography paragraph variant="body1">
                    Участник и лауреат международных фестивалей. Член СТД РФ.
                    Автор и соавтор инсценировок, сценариев. Ведущая
                    мастер-классов по актерскому и ораторскому мастерству.
                    Организатор, режиссер городских мероприятий, фестивалей.
                    Резидент театральных и культурных центров.
                </Typography>

                {/* Контактная информация */}
                <Box mt={3} display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <IconButton
                            color="primary"
                            href="mailto:art-tsekh@mail.ru"
                        >
                            <EmailIcon />
                        </IconButton>
                        <Typography variant="body1">
                            art-tsekh@mail.ru
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                        <IconButton color="primary" href="tel:+79165072449">
                            <PhoneIcon />
                        </IconButton>
                        <Typography variant="body1">
                            8 (916) 507-2449
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                        <IconButton
                            color="primary"
                            href="http://www.art-tsekh.com"
                            target="_blank"
                        >
                            <LanguageIcon />
                        </IconButton>
                        <Typography variant="body1">
                            www.art-tsekh.com
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
