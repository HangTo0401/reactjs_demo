// Viết CSS in JS
const styles = () => ({
    modal: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        height: 250,
        borderRadius: '10px',
        backgroundColor: 'white',
        outline: 'none'
    },
    textField: {
        width: '100%'
    },
    title: {
        marginTop: '10px',
        marginLeft: '20px'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15px',
        justifyContent: 'flex-end',
        width: '90%'
    },
    container: {
        marginLeft: '20px'
    },
    okButton: {
        marginLeft: '20px'
    }
});
  
export default styles;
