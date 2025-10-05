import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'
import Logout from './components/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5 container mx-auto '>
      <nav className='py-28 mt-16 bg-slate-400'>
        <ul className='flex flex-wrap   space-y-6 md:items-center space-x-4 md:justify-center'>
          <li ><Link to="/register" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>Register</Link></li>
          <li ><Link to="/login" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>Login</Link></li>
          <li ><Link to="/dashboard" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>dashboard</Link></li>
          <li ><Link to="/blog" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>Blog</Link></li>
          <li ><Link to="/profile" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>Profile</Link></li>
          <li ><Link to="/reset-password" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>reset</Link></li>
          <li ><Link to="/reset-password-email" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>send email</Link></li>
            <li ><Link to="/password-less-signin" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>send singin</Link></li>

            <li ><Link to="/finish-signup" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800'>complete singin</Link></li>
        </ul>
      </nav>
      <Logout />
    </div>
  )
}

export default App
