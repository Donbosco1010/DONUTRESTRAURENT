import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Api from './Api.jsx'
import Nav from './Nav.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Api />
  </StrictMode>,
)
