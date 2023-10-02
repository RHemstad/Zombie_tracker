import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

const TestPage = () => {
  return (
    <>

<section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/login">Login</Link><br />
            <Link to="/register">Register</Link><br />
            <br />
            <h2>Private</h2>
            <Link to="/home">Home</Link><br />
            <Link to="/dashboard">Dashboard</Link><br />
            <Link to="/admin">Admin Page</Link><br />
        </section>
    
    
    
    
    
    </>
  )
}

export default TestPage