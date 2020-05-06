import React from 'react';


function Login ({ onLogin }) {

    return (
        <button
            type = "button"
            className="login btn"
            onClick={onLogin}
        >
            Login
        </button>
    )
}

export default Login;