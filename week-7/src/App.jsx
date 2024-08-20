// import React, { Suspense } from "react"
// import { lazy } from "react"
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
// import Home from './components/Home'
// // import About from './components/About'
// // import Contact from './components/Contact'
// // lazy 
// const About = React.lazy(() =>import('./components/About'))
// const Contact =  React.lazy(() =>import('./components/Contact'))




// function App() {


//   return (
//     <>
//     <BrowserRouter>
//     <AppBar/>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={ <Suspense fallback="loading..."> <About/> </Suspense>}/>
//       <Route path="/contact" element={ <Suspense fallback={"loading..."}> <Contact/> </Suspense>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// function AppBar(){
//   const navigate = useNavigate()
//   return(
//     <div>
//     <button onClick={() => navigate("/about")}>About</button>
//     <button onClick={() => navigate("/contact")}>Contact</button>
//   </div>
//   )
// }
// export default App



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


// TODO "RECOIL"

// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
// import { countAtom, evenSelector } from "./Store/atoms/count"

// export default function App(){
//   return(
//     <RecoilRoot>
//     <Count/>
//     </RecoilRoot>
//   )
// }

// function Count(){
//   return(
//     <div>
//     <CountRender/>
//     <Button/>
//     </ div>
//   )
// }

// function CountRender(){
//   // if we just need the value use this 
//   const count = useRecoilValue(countAtom)
//   const isEven = useRecoilValue(evenSelector)
//   // if we need both : 
//   // const [count,setCount] = useRecoilState(countAtom)
//   return(
//     <div>

//     {
//       count
//     }
//     {
//         <p>{ isEven  ? 'It is Even' : "" }</p>
//     }
//     </div>
//   )
// }

// function Button(){
//   //  const [count,setCount] = useRecoilState(countAtom) - we dont need the count we can use "UseSetRecoilState" its better way to do so .
//   const setCount = useSetRecoilState(countAtom)
//   console.log("button re-rendered");
  
//   return(
//     <div>
//       <button onClick={ () =>setCount(count => count + 1)}>+</button>
//       <button onClick={ ()=> setCount(count => count - 1)}>-</button>
//     </div>
//   )
// }



// Todo - TODO APP Assignment
import { RecoilRoot } from "recoil"

export default function App(){
  return(
    <RecoilRoot>
    <Todo/>
    </RecoilRoot>
  )
}

function Todo(){
  return(
    <div>
    <input type="text" placeholder="Title" onChange={(e) => setValue(e.target.value)} />    <br /> <br />   
    <input type="text" placeholder="Description" />      <br /> <br />
    <button>Add Todo</button>
  </div>
  )
}