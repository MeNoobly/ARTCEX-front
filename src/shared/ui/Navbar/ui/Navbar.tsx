import InstagramIcon from '@mui/icons-material/Instagram'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import TelegramIcon from '@mui/icons-material/Telegram'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { FC, useState } from 'react'

import { Join } from '../../../../widgets/Join'
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
        { label: 'О нас', link: '#about' },
        { label: 'О наших курсах и студиях, проектах', link: '#courses' },
        { label: 'Блог', link: '#blog' },
        { label: 'Команда педагогов', link: '#team' },
        { label: 'Актерское агентство', link: '#agency' },
        { label: 'Галерея', link: '#gallery' },
        { label: 'Расписание занятий', link: '#schedule' },
    ]

    return (
        <AppBar
            position="static"
            className={styles.navbar}
            sx={{ bgcolor: 'black' }}
        >
            <Toolbar className={styles.toolbar}>
                <img src="/img/logo.svg" alt="Logo" className={styles.logo} />
                <div className={styles.links}>
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.link} className={styles.link}>
                            {item.label}
                        </a>
                    ))}
                </div>
                <div>
                    <Join isShort />
                </div>
                <div className={styles.actions}>
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
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                        className={styles.btn}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    className={styles.menu}
                >
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} onClick={handleMenuClose}>
                            <a href={item.link} className={styles.menuItem}>
                                {item.label}
                            </a>
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
