import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  return(

    <div>
    <HeaderWithButton />
    <Header  title="Hello user 1"/>
    <Header  title="Hello user 1"/>
    <br />
    <Todo/>
  </div>
  )
}

function HeaderWithButton() {
  const [heading, setHeading] = useState("Hello user 1");

  function handleClick() {
    setHeading("Hello user " + Math.random());
  }

  return (
    <div>
      <button onClick={handleClick}>Click me to change the title </button>
      <Header title={heading} />
    </div>
  );
}

function Header({ title }) {

  return <div>{title}</div>;
}

export default App;
