// import { useState } from "react";
// import Todo from "./components/Todo";


// function App() {
//   return(

//     <div>
//     <HeaderWithButton />
//     <Header  title="Hello user 1"/>
//     <Header  title="Hello user 1"/>
//     <br />
//     <Todo/>
//   </div>
//   )
// }

// function HeaderWithButton() {
//   const [heading, setHeading] = useState("Hello user 1");

//   function handleClick() {
//     setHeading("Hello user " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click me to change the title </button>
//       <Header title={heading} />
//     </div>
//   );
// }

// function Header({ title }) {

//   return <div>{title}</div>;
// }

// export default App;

// TODO:

// import { useState } from "react";

// function App(){
//   const [todos,setTodos] = useState([
//     {
//       title: "Go To Gym .",
//       description: "Exercise for 2 hours"
//     },
//     {
//       title: " Go To Collage .",
//       description: "Study for 6 hours"
//     },
//     {
//       title: "Play football   .",
//       description: "for 2 hours"
//     }
//   ])
//   function addTodo(){
//     setTodos([...todos,{
//       title:Math.random(),
//       description:Math.random()
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {
//         todos.map(todo  => <Todo key={todo.title} title={todo.title} description={todo.description}/>)
//       }
//     </div>
//   )
// }

// function Todo({title,description}){
//   return(
//     <>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//     </>
//   )
// }

// export default App

// --------------------------------------------------------------------------------------------

// import { useState } from "react";

// function App(){

//   return (
//     // <div>
//     // <CardWrapper innerComponent={<TextComponent/>}/>
//     // </div>

//     // todo: cleaner syntax to create wrapper
//     <CardWrapper>
//       hi there
//     </CardWrapper>
//   )
// }

// function TextComponent(){
//   return(
//     <div>
//       Hi there
//     </div>
//   )
// }

// function CardWrapper({innerComponent}){
//   return(
//     <div style={{border:"2px solid black"}}>
//       {innerComponent}
//     </div>
//   )
// }


// todo: Hooks

// import { useState,useEffect } from "react"

// function App(){
//   const [todos,setTodos] = useState([])

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async function (res) {
//       const json = await res.json()
//       setTodos(json.todos)
//     })
//   }, [])
  
//   return <div>
//       {todos.map(todo => <Todo key={todo.title} title={todo.title} description={todo.description}/>)}
//     </div>
  
// }

// function Todo({title,description}){
//   return(
//     <div>
//       <h1>Title : {title}</h1>
//       <p>Description : {description}</p>
//     </div>
//   )
// }

// export default App

// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------

// TODO: useeffect week6.2

// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//     const [id,setId] = useState(1)
//   return <div>
//     <button onClick={function(){
//         setId(1)
//     }}>1</button>

//      <button onClick={function(){
//         setId(2)
//     }}>2</button>

//  <button onClick={function(){
//         setId(3)
//     }}>3</button>

//      <button onClick={function(){
//         setId(4)
//     }}>4</button>
//     <Todo id={id} />
//   </div>
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo (json.todo);
//       })
//   }, [id])

//   return <div>
//     {/* id:{id} */}
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

// export default App;


// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------

import { useMemo, useState } from "react"
function App(){
    const [counter,setCounter] = useState(0)
    const [value,setValue] = useState(1)

    const sum = parseInt(counter) + parseInt(value)

    // useMemo to optimize the calculation of sum
    // const sum = useMemo(() => counter + value, [counter, value]);

    return(
        <>
        <div>
            <input 
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
             />
        </div>

        <h1>Sum is {sum}</h1>

        <button onClick={function(){
            setCounter((e)=> e+1)
        }}>Counter {counter}</button>

        </>
    )
}
export default App