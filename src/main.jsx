import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Api from './Api.jsx'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Categories from './Categories.jsx'
import Recipe from './Recipe.jsx'
import About from './About .jsx'
import Contact from './Contact.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Nav.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path = '/categories' element={<Categories/>}/>
    <Route path='/Recipe' element={<Recipe/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
