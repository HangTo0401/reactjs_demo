import { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtUsername: '',
            txtPassword: ''
        }
    }

    onChange = (e) => {
        e.preventDefault()
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({
            [name]: value
        })
        console.log(e.target)
    }

    onLogin = () => {
        var { txtUsername, txtPassword } = this.state

        if (txtUsername && txtPassword) {
            localStorage.setItem('user', JSON.stringify({username: txtUsername, password: txtPassword}))
        }
    }

    render(){
        var { txtUsername, txtPassword } = this.state
        var loggedInUser = localStorage.getItem('user')
        if (loggedInUser !== null) {
            return <Navigate to='/products'/>
        }

        return(
            <div className='row'>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    
                    <form role='form' onSubmit={this.onLogin}>
                        <legend>Đăng nhập</legend>
                    
                        <div className='form-group'>
                            <label className='username-label'>Username: </label>
                            <input type='text' name='txtUsername' value={txtUsername} className='form-control' id='' placeholder='Input field' onChange={this.onChange}/>
                        </div>

                        <div className='form-group'>
                            <label className='password-label'>Password: </label>
                            <input type='password' name='txtPassword' value={txtPassword} className='form-control' id='' placeholder='Input field' onChange={this.onChange}/>
                        </div>
                    
                        <button type='submit' className='btn btn-primary'>Đăng nhập</button>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default Login