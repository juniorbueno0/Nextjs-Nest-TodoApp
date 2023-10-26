import axios from 'axios';

export type Todo = {
    title: string
    description:string
    status:string
}

export type Todos = {
    _id: string
    title: string
    description:string
    status:string
}



// it works :)
export async function getTodos(): Promise<Todos[]> {
    const response = await axios.get('http://localhost:3002/todos');
    console.log(response.data);
//     const todosWithId: Todos[] = [];

//   for (const todo of response.data) {
//     todosWithId.push({
//       ...todo,
//       _id: todo._id
//     });
//   }
//   console.log(todosWithId);
  
    return response.data;
    // return todosWithId;
}

export async function createTodos(user: Todo){

    console.log(user)
    axios.post('http://localhost:3002/todos', user)
    .then(() => {
        return 'OK';
    })
    .catch((error) => {
        return error;
    });
}

export function deleteTodos(id:Todos) {
    const idd = id._id
    console.log(idd);
    
    axios.delete('http://localhost:3002/todos/' + idd).then(() => {
        return 'OK';
    }).catch((error) => {
        return error;
    });
}