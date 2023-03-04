import { toast } from 'react-toastify'

const toasts = {
    add: () => toast.success('Заметка добавлена'),
    edit: () => toast.success('Заметка изменена'),
    delete: () => toast.success('Заметка удалена')
}

export default toasts;
