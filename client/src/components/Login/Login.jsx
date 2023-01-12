import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h1> Login </h1>
            <div>
                <label>
                    USUARIO:
                </label>
                <input type="text" />
                <label>
                    PASSWORD:
                </label>
                <input type="password" />
                <Link to='/index'>
                    <button  >
                        Ingresar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Login;