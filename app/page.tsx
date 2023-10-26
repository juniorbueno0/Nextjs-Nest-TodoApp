"use client"

import { useState, useEffect } from "react";
import { createTodos, deleteTodos, getTodos, Todos, Todo } from "@/lib/data";


export default function Home() {
  // todo list
  const [todos, setTodos] = useState<Todos[]>([]);

  //inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    getTodos().then((todos: Todos[]) => {setTodos(todos); console.log(todos)}).catch((error) => {
      console.log(error)
    });
  }, []);

  function handleSubmit() {
    const newPost: Todo = {
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

  function handleDelete(id: Todos){
    deleteTodos(id)
  }

  return (
    <div className="bg-white w-screen h-screen justify-center items-center flex flex-col gap-4">

      <div className="flex gap-4 justify-between">
        <div className="bg-indigo-300 w-[300px] h-[50px] flex flex-col items-center justify-center text-center rounded-lg">
          <h2 className="text-center font-extrabold text-4xl">Create Todo</h2>
        </div>
        <div className="bg-indigo-300 h-[50px] w-[620px] rounded-xl flex items-center justify-center">
        <h2 className="text-center font-extrabold text-4xl">Todo list</h2>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-black w-[300px] h-[250px] flex flex-col items-center text-center rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="text-black flex flex-col p-2 mt-4">
              <input type="text" className="input input-bordered mt-1 h-[40px]" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
              <input type="text" className="input input-bordered mt-2 h-[40px]" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
              <input type="text" className="input input-bordered mt-2 h-[40px]" placeholder="Status" onChange={(e) => setStatus(e.target.value)}/>
            </div>
              <button type="submit" className="bg-white text-black text-3xl font-semibold mt-2 w-full rounded-2xl h-[50px]">Post</button>
          </form>
        </div>

        <div className="bg-black h-[250px] w-[620px] rounded-xl flex">
          <div className="overflow-x-auto">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Task</th>
                  <th></th>
                  <th></th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo: Todos) => (
                  <tr  key={todo._id}>
                    <td key={todo._id}>{todo.title}</td>
                    <td></td>
                    <td></td>
                    <td key={todo._id}>{todo.description}</td>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <td key={todo._id}>{todo.status}</td>
                    <td></td>
                    <td></td>
                    <td><button className="ml-4 bg-red-400 rounded-lg px-1 hover:bg-red-500" onClick={() => handleDelete(todo)}> Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>    
  )
}