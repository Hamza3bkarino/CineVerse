import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NavBar from './components/NavBar'
import Categories from './Pages/Categories'

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
