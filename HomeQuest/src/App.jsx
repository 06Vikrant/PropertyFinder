import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './layout.scss'
import { Navbar } from './components'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App
