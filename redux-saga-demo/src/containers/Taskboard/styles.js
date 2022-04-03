import { hover } from "@testing-library/user-event/dist/hover";

// Viết CSS in JS
const styles = (theme) => ({
    taskBoard: {
        alignItems: 'center',
    },
    shape: {
        padding: '20px',
        margin: '10px',
        backgroundColor: theme.color.primary,
        color: theme.shape.color,
        borderColor: '#CCCCCC',
        borderRadius: '4px'
    },
    button: {
        borderRadius: '4px'
    },
    okButton: {
        color: '#fafafa',
        backgroundColor: '#1b5e20'
    },
    modalConfirmTextBold: {
        fontWeight: 700,
    },
    modalConfirmButton: {
        color: '#fafafa',
        backgroundColor: '#00E091',
        '&:hover': {
            background: '#00E091',
        }
    },
});

export default styles;
