import './login.css';
import '../../css/forms.css'
import {useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import Button from '../button/Button';
import axios from '../../api/axios';
import { Link, useNavigate } from "react-router-dom";

const LOGIN_URL = 'http://localhost:3500/login';
//todo set up stricter authentication
//const LOGIN_URL = 'http://localhost:3500/api/auth/login';


//Login - aka sign in to existing account
//Using the term ‘login’ means that at a glance the user can instantly tell the difference between ‘Login’ and ‘Sign up’.
const Login = () => {
    const navigate = useNavigate();
    //const { setAuth } = useContext(AuthContext);

    //ref to set focus on input
    const userRef = useRef();
    //ref to set focus on errors that happen
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    //for testing only
    const [success, setSuccess] = useState(false);

    /* **************************** */
    /* **** USE EFFECT ************ */
    /* **************************** */

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    /* **************************** */
    /* **** HANDLE SUBMIT ******* */
    /* **************************** */

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //todo: finish setting up authentication / roles
           //console.log(JSON.stringify(response));
            //const accessToken = response?.data?.accessToken;
            //const roles = response?.data?.roles;
            //setAuth({ username, password, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }


    }

  return (
    <>
    <section id="login" className="glass-effect">
    {/* error message at top */}
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

    <h2>Login</h2>

{/* START FORM */}
<form onSubmit={handleSubmit}>

    <label htmlFor="username">Username</label>
    <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={username}
        required
    />

        {/* ******************* */}
        {/* **** PASSWORD **** */}
        {/* ******************* */}

<label htmlFor="password">Password</label>
    <input
        type="password"
        id="pasword"
        onChange={(e) => setPwd(e.target.value)}
        value={password}
        required
    />

    <Button className="primary-button" type="submit">Login</Button>
</form>

    {/* END FORM */}

    <p>Need an Account?<br />
    <span className="line">
            <Link to="/register">Sign Up</Link>
    </span>
    </p>







</section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Login