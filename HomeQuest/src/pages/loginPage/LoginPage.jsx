import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './style.scss'

const LoginPage = () => {

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.target);

    const username = formData.get('username');
    const password = formData.get('password');
  }
  return (
    <div className='login'>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input 
            name="username"
            required 
            minLength={3}
            maxLength={20}
            type="text"
            placeholder='Username'
          />
          <input
            name="password"
            required 
            type="password"
            placeholder='Password'
          />
          <button >Login</button>
          {error && <span>{error}</span>}
          <Link to='/register'>{"Don't"} you have an account?</Link>
        </form>
      </div>
        <div className="imgContainer">
          <img src="bg.png" alt="" />
        </div>
    </div>
  )
}

export default LoginPage
