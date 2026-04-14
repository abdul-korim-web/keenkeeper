
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar.'
import HomeLagout from './HomeLagout/HomeLagout'
import Footer from './Components/Footer'

function App() {

  return (
   <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<HomeLagout/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
