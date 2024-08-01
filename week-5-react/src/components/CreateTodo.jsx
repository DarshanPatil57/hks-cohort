import React, { useState } from "react";
import "../App.css";

const CreateTodo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  return (
    <div className="content">
      <div className="content-info">
        <span>Title : </span>{" "}
        <input className="itp" type="text" placeholder="title" onChange={function(e){
            const value = e.target.value
            setTitle(e.target.value)
        }} /> <br />
        <span>Description : </span>{" "}
        <input className="itp" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value
            setDescription(e.target.value)
        }} /> <br />
        <button
          onClick={() => {
            fetch("http://localhost:5173/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-type":"application/json"
                }
            })

            .then(async function (res) {
              const json = await res.json();
              alert("Todo added")
            });
          }}
          className="btn"
        >
          Add a Todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
