import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ProductPage } from './Pages/ProductPage'
import AddToCart from './Pages/AddToCartPage'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import { useState } from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Feedback from './component/Feedback'

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <NavBar searchItem={searchValue} setSearchItem={setSearchValue} />
      <Routes>
        <Route path='/' element={<Home searchItem={searchValue} />} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
      </Routes>
      <Feedback />
      <Footer />
    </>
  )
}

export default App


function Home({ searchItem, setSearchItem }) {

  return (
    <>
      <ProductPage searchItem={searchItem} />
    </>
  )
}

