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