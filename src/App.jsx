
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar.'
import HomeLagout from './HomeLagout/HomeLagout'
import Footer from './Components/Footer'
import SingleFriend from './Components/SingleFriend'
import TimeLines from './Components/TimeLines'

function App() {

  return (
   <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<HomeLagout/>}/>
    <Route path='/timeline' element={<TimeLines/>}/>
    <Route path='/friend/:id' element={<SingleFriend/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
