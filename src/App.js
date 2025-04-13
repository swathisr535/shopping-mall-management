import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Orders from './pages/Orders'
import AddOrder from './pages/AddOrder'
import UpdateOrder from './pages/UpdateOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import DeleteOrder from './pages/DeleteOrder'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'> 
    <Navbar />
    <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/addorder' element={<AddOrder/>} />
      <Route path='/updateorder' element={<UpdateOrder/>} />
      <Route path='/deleteorder' element={<DeleteOrder/>} />


    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
