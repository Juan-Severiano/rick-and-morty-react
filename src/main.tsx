import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/App'
import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
