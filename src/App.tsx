
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './pages/Headers/Header'
import MenNavbar from './pages/NavBarRelated/MenNavbar/MenNavbar'

function App() {

  const location = useLocation()

  return (
    <>
      <Navbar />
      <Header />
      {location.pathname === '/men' ? <MenNavbar /> : location.pathname === '/women'}
      <Outlet />
    </>
  )
}

export default App
