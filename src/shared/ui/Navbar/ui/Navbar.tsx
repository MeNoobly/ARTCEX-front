import InstagramIcon from '@mui/icons-material/Instagram'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { Join } from '@/widgets/Join'

import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const menuItems = [
        { label: 'Театр-студия', link: '/theater-studio' },
        { label: 'Киношкола ', link: '/cinema-school' },
        { label: 'Арт-мастерская ', link: '/art-masterskaya' },
        { label: 'Вокал', link: '/vocal' },
        { label: 'Мастер-классы', link: '/master-classes' },
        { label: 'Летний лагерь', link: '/summer-camp' },
        { label: 'События ', link: '/events' },
        { label: 'Контакты', link: '/contacts' },
    ]

    return (
        <AppBar
            position="static"
            className={styles.navbar}
            sx={{ bgcolor: 'black' }}
        >
            <Toolbar className={styles.toolbar}>
                <Link to="/">
                    <img
                        src="/img/logo.svg"
                        alt="Logo"
                        className={styles.logo}
                    />
                </Link>
                <div className={styles.links}>
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.link} className={styles.link}>
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className={styles.actions}>
                    <Box sx={{ marginRight: '10px' }}>
                        <Join isShort />
                    </Box>
                    <a href="tel:79165072449">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="call"
                            className={styles.btn}
                        >
                            <PhoneIcon />
                        </IconButton>
                    </a>
                    <a href="tel:79165072449">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="telegram"
                            className={styles.btn}
                        >
                            <TelegramIcon />
                        </IconButton>
                    </a>
                    <a href="tel:79165072449">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="call"
                            className={styles.btn}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </a>
                    <Box className={styles.menuButton}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={styles.btn}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        className={styles.menu}
                        onClose={handleMenuClose}
                    >
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} onClick={handleMenuClose}>
                                <a href={item.link} className={styles.menuItem}>
                                    {item.label}
                                </a>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}
