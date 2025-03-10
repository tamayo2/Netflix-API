import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
    return (
        <div className='login'>
            <img src={logo} alt='logo'/>
            <div className="login-form">
                <h1>Sign In</h1>
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                    <div className="form-help">

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login