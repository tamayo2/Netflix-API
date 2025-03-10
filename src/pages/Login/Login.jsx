import './Login.css'
import logo from '../../assets/logo.png'
import {useState} from "react";

const Login = () => {

    const [signState, setSignState] = useState("Sign in")

    return (
        <div className='login'>
            <img src={logo} className='login-logo' alt=""/>
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign up</button>
                    <div className="form-help">
                        <div className="remember" >
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    <p>New to Netflix? <span>Sing Up Now</span></p>
                    <p>Already have account? <span>Sing In Now</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login