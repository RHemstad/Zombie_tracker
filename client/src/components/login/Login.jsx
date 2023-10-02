import '../../css/forms.css';
import './login.css';
import {useRef, useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import Button from '../button/Button';
import { Link, useNavigate, useLocation } from "react-router-dom";
import BackAni from '../background_animation/BackAni';
import ZombieMove from '../background_animation/ZombieMove';


const LOGIN_URL = 'http://localhost:3500/auth';


//Login - aka sign in to existing account
//Using the term ‘login’ means that at a glance the user can instantly tell the difference between ‘Login’ and ‘Sign up’.
const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/dashboard';

    //ref to set focus on input
    const userRef = useRef();
    //ref to set focus on errors that happen
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
 

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
            //requires a with credential flag for axios
           console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username, password, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, {replace: true});
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



    <BackAni />

    <ZombieMove />

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
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={password}
        required
    />

    <Button className="primary-button" type="submit">Login</Button>
</form>

    {/* END FORM */}

    <p className="note">Need an Account?<br />
<Link to="/register">Sign Up</Link>
    </p>
</section>
    
    
    </>
  )
}

export default Login