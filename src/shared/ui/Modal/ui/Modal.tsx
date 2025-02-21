import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material'
import { useState } from 'react'

interface ModalProps {
    open: boolean
    onClose: () => void
    title: string
    fields: {
        name: string
        label: string
        type?: string
        multiline?: boolean
        rows?: number
    }[]
    onSubmit: (values: Record<string, string>) => void
}

export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    title,
    fields,
    onSubmit,
}) => {
    const [formValues, setFormValues] = useState<Record<string, string>>({})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        onSubmit(formValues)
        onClose()
    }

    return (
        <Dialog fullWidth open={open} maxWidth="sm" onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {fields.map((field) => (
                    <TextField
                        key={field.name}
                        fullWidth
                        name={field.name}
                        label={field.label}
                        type={field.type || 'text'}
                        value={formValues[field.name] || ''}
                        margin="normal"
                        multiline={field.multiline || false}
                        rows={field.multiline ? field.rows || 4 : undefined}
                        onChange={handleInputChange}
                    />
                ))}
            </DialogContent>
            <DialogActions>
                <Button color="error" variant="outlined" onClick={onClose}>
                    Отменить
                </Button>
                <Button
                    color="success"
                    variant="outlined"
                    onClick={handleSubmit}
                >
                    Отправить
                </Button>
            </DialogActions>
        </Dialog>
    )
}
