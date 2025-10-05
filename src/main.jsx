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
import UserProfile from './components/UserProfile.jsx'
import UpdateProfile from './components/UpdateProfile.jsx'
import UpdatePassword from './components/UpdatePassword.jsx'
import SendPasswordResetEmail from './components/SendPasswordResetEmail.jsx'
import SendSignInlink from './components/passwordless/SendSignInlink.jsx'
import FinishSignin from './components/passwordless/FinishSignin.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/password-less-signin" element={<SendSignInlink />} />
         <Route path="/finish-signup" element={<FinishSignin />} />
        <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>} />
        <Route path='/blog' element={<PrivateRoute>
          <Blogs />
        </PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute>
          <UserProfile />
        </PrivateRoute>} />

        <Route path="/update" element={<PrivateRoute>
          <UpdateProfile />
        </PrivateRoute>} />
        <Route path="/reset-password" element={<PrivateRoute>
          <UpdatePassword />
        </PrivateRoute>} />
            <Route path="/reset-password-email" element={<PrivateRoute>
          <SendPasswordResetEmail />
        </PrivateRoute>} />
      </Routes>
    </BrowserRouter>,
  </AuthProvider>
)
