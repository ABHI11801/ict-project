import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Contactus from './components/Contactus'
import { Route, Routes} from 'react-router-dom'
import About from './pages/About'
import ExecutiveDashboard from './pages/ExecutiveDashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import LeadDetails from './pages/LeadDetails'
import UserDetails from './pages/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/executive' element={<ExecutiveDashboard/>}/>
        <Route path='/manager' element={<ManagerDashboard/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/LeadDetails' element={<LeadDetails/>}/>
        <Route path='/UserDetails' element={<UserDetails/>}/>
        
      </Routes>
    </>
  )
}

export default App
