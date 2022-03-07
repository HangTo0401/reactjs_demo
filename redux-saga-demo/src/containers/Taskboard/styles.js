// Viết CSS in JS
const styles = (theme) => ({
    taskboard: {
        display: 'flex',
        alignItems: 'center'
    },
    shape: {
        padding: '20px',
        margin: '10px',
        backgroundColor: theme.color.primary,
        color: theme.shape.color,
        borderColor: '#CCCCCC',
        borderRadius: '4px'
    }
})

export default styles