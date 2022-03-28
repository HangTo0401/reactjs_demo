// Viết CSS in JS
const styles = () => ({
    modal: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        height: 300,
        borderRadius: '10px',
        backgroundColor: 'white',
        outline: 'none',
        padding: '20px'
    },
    textField: {
        width: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        marginTop: '10px',
    },
    closeIcon: {
        cursor: 'pointer',
        fontSize: '25px'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15px',
    },
    container: {
    },
    okButton: {
        marginLeft: '20px'
    }
});
  
export default styles;
