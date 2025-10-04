import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5 container mx-auto '>
      <nav className='py-28 mt-16 bg-slate-400'>
        <ul className='flex items-center space-x-4 justify-center'>
          <li ><Link to="/register" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>Register</Link></li>
          <li ><Link to="/login" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>Login</Link></li></ul>
      </nav>
    </div>
  )
}

export default App
