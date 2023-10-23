"use client"

import { useState, useEffect } from "react";
import { createTodos, getTodos, Todos } from "@/lib/data";

export default function Home() {
  // todo list
  const [todos, setTodos] = useState<Todos[]>([]);

  //inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    getTodos().then((todos: Todos[]) => setTodos(todos));
  }, []);

  function handleSubmit() {
    const newPost: Todos = {
      title,
      description,
      status
    }

    createTodos(newPost).then(() => {
      console.log('Todo Creted!')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
          <input type="text" placeholder="Status" onChange={(e) => setStatus(e.target.value)}/>
        </div>
          <button type="submit" className="bg-white text-green-300">Post</button>
        </form>

      </div>

      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.title}> {todo.title} - {todo.description} : {todo.status}</li>
          ))}
        </ul>
      </div>
    </div>    
  )
}