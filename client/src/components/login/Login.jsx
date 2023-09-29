import {useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import Button from '../button/Button';
import axios from '../../api/axios';

//const LOGIN_URL = 'http://localhost:3500/register';
const LOGIN_URL = 'http://localhost:3500/api/auth/login';
const Login = () => {
    const { setAuth } = useContext(AuthContext);

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
    <section id="register" className="glass-effect">
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

<label htmlFor="password">Username</label>
    <input
        type="password"
        id="pasword"
        onChange={(e) => setPwd(e.target.value)}
        value={password}
        required
    />

    <button type="submit">Sign In</button>
</form>

    {/* END FORM */}

    <p>Need an Account?<br />
    <span className="line">
            {/*put router link here*/}
            <a href="#">Sign Up (Register)</a>
    </span>
    </p>







</section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Login