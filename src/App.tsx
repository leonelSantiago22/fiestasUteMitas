import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/landing'
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
              <Route element={<Landing/>} path='/'/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
