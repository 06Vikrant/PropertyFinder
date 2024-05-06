import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const user = null;

  return (
    <nav>
        <div className="left">
            <a href="/" className='logo'>
                <img src="/logo.svg" alt="" />
                <span>Real Estate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className="right">
            {user ? (
                <div className='user'>
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/14/36/man-148582_640.png" alt="" />
                    <span>John Doe</span>
                    <Link to='/profile' className='profile'>
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>
                ) : (
                <>
                    <Link to="/login">Sign in</Link>
                    <Link to="/register" className='register'>Sign up</Link>
                </>
                )}
            <div className="menuIcon">
                <img 
                    src="/menuMain.png" 
                    alt="" 
                    onClick={() => setOpen(!open)}
                /> 
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <Link to="/login">Sing in</Link>
                <Link to="/register">Sign up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar