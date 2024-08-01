import { useState } from "react"
import CreateTodo from "./components/CreateTodo"
import Todo from "./components/Todo"


function App() {
  const [todo,setTodo] = useState([])

  return (
    <div>
    <CreateTodo/>
    <Todo todos={todo}/>
    </div>
  )
}

export default App
 