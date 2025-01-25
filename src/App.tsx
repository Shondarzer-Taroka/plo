
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './pages/Headers/Header'

function App() {


  return (
    <>
    <Navbar/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
