import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import { AuthProvider } from './context/Authcontext.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Blogs from './components/Blogs.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>} />
        <Route path='/blog' element={<PrivateRoute>
          <Blogs/>
        </PrivateRoute>}/>
      </Routes>
    </BrowserRouter>,
  </AuthProvider>
)
