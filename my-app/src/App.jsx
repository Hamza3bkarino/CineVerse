import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import NavBar from './components/NavBar'
import Categories from './Pages/Categories'
import Results from './Pages/Results'

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/search-result' element={<Results/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
