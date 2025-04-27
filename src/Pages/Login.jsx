import React from 'react'

const Login = () => {
    return (
        <div className="formContainer">
            <h1>Login Your Account</h1>
            <form>
                <input type="email" placeholder='Enter Youe Email' />
                <input type="text" placeholder='Enter Youe UserNamer' />
                <input type="password" placeholder='Enter Youe Password' />
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default Login
