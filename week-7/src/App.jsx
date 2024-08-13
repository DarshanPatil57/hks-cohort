import React from "react"
import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// lazy 
const About = React.lazy(() =>import('./components/About'))
const Contact =  React.lazy(() =>import('./components/Contact'))


function App() {


  return (
    <>
    <div>
      <button onClick={() => window.location.href="/about"}>About</button>
      <button onClick={() => window.location.href="/contact"}>Contact</button>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
