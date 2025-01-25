import { Button } from '@mui/material'
import { FC, useState } from 'react'

import { Modal } from '../../../shared/ui/Modal'

interface JoinProps {
    isShort?: boolean
}

export const Join: FC<JoinProps> = ({ isShort = false }) => {
    const [isModalOpen, setModalOpen] = useState(false)

    const handleOpen = () => setModalOpen(true)
    const handleClose = () => setModalOpen(false)

    const handleSubmit = (values: Record<string, string>) => {
        console.log('Form submitted with values:', values)
    }

    return (
        <div>
            <Button
                type="button"
                variant="contained"
                sx={{
                    backgroundColor: 'black',
                }}
                onClick={handleOpen}
            >
                {isShort ? 'Записаться' : 'Записаться на пробное занятие'}
            </Button>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                title="Записаться на пробное занятие"
                fields={[
                    {
                        name: 'info',
                        label: 'Ваш email или номер телефона',
                    },
                    { name: 'name', label: 'Ваше имя' },
                    {
                        name: 'description',
                        label: 'Ваши пожелания по курсу',
                        multiline: true,
                        rows: 6,
                    },
                ]}
                onSubmit={handleSubmit}
            />
        </div>
    )
}
