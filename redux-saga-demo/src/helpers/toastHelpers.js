import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const toastError = (error) => {
    let message = null
    if (typeof error === "object" && error.message) {
        message = error.message
    }
    if (message !== "" && message !== null && message !== undefined) {
        toast.error(message)
    }
    
}
