import React from 'react';
import useAuth from '../../../Context/useAuth';
import './Login.css';

const Login = () => {
    const { user, handleGoogleLogin } = useAuth();
    console.log(user);
    return (
        <div className="login-container bg-light container d-flex justify-content-center align-items-center mt-3">

            <div className="login w-50 h-75 bg-white border">
                <h3 className="mt-5">Login with</h3>
                <button onClick={handleGoogleLogin} className="btn btn-outline-secondary rounded-pill mt-4">Continue with google</button>
            </div>
        </div>
    );
};

export default Login;