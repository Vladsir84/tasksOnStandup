import React from 'react';


function Login ({ handleLogin }) {

    return (
        <button
            type = "button"
            className="login btn"
            onClick={handleLogin}
        >
            Login
        </button>
    )
}

export default Login;