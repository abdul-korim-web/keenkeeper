
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar.'
import HomeLagout from './HomeLagout/HomeLagout'
import Footer from './Components/Footer'
import SingleFriend from './Components/SingleFriend'
import TimeLines from './Components/TimeLines'
import Status from './Components/Status';
import { ToastContainer } from 'react-toastify'
import NotFound from './Components/NotFound'

function App() {

  return (
   <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<HomeLagout/>}/>
    <Route path='/timeline' element={<TimeLines/>}/>
    <Route path='/status' element={<Status/>}/>
    <Route path='/friend/:id' element={<SingleFriend/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   <ToastContainer />
   <Footer/>
   </>
  )
}

export default App
