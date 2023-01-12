import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (

        <div>
            <h1>LandingPage</h1>

            <Link to="/login">
                <button>
                LOGIN
                </button>
            </Link>

            <Link to="/register">
                <button>
                REGISTER
                </button>
            </Link>

        </div>


    )
}

export default LandingPage