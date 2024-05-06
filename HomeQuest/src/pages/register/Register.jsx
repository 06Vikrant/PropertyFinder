import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'

const Register = () => {

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
    }

  return (
    <div className='registerPage'>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <input 
                name='username'
                type="text"
                required
                placeholder='Username'
            />
            <input 
                name='email'
                type="email"
                required
                placeholder='Email'
            />
            <input 
                name='password'
                type="password"
                required
                placeholder='Password'
            />
            <button disabled={isLoading}>Register</button>
            {error && <span>{error}</span>}
            <Link to='/login'>Do you have an account?</Link>
        </form>
      </div>
      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  )
}

export default Register
