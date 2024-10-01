import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/herosection' element={<HeroSection/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </>
  )
}

export default App