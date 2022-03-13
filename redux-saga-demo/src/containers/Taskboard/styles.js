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
    }
})

export default styles