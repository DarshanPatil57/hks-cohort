import React, { Suspense } from "react"
import { lazy } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// lazy 
const About = React.lazy(() =>import('./components/About'))
const Contact =  React.lazy(() =>import('./components/Contact'))


function App() {


  return (
    <>
    <BrowserRouter>
    <AppBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={ <Suspense fallback="loading..."> <About/> </Suspense>}/>
      <Route path="/contact" element={ <Suspense fallback={"loading..."}> <Contact/> </Suspense>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

function AppBar(){
  const navigate = useNavigate()
  return(
    <div>
    <button onClick={() => navigate("/about")}>About</button>
    <button onClick={() => navigate("/contact")}>Contact</button>
  </div>
  )
}
export default App



// Prop drilling 

// todo:  interview question - Prop drilling doesn't means that parent re-renders children it just means the syntatic uneasiness when writtong the code .
// import { useState } from "react"

// export default function App(){
//   const [count,setCount] = useState(0)
//   return(
//     <div>
//       <Count count={count} setCount={setCount}/>
//     </div>
//   )
// }

// function Count({count,setCount}){
//   return(
//     <div>
//       {count}
//       <Button count={count} setCount={setCount}/>
//     </div>
//   )
// }

// function Button({count,setCount}){

//   return(
//     <div>
//       <button onClick={() => setCount(count+1)}>
//         Increment
//       </button>

//       <button onClick={() => setCount(count-1)}>
//         Decrement
//       </button>
//     </div>
//   )
// }