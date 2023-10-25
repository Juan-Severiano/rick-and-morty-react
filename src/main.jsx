import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Home from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
