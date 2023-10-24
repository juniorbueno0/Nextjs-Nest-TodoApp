import axios from 'axios';

type Post = {
    id: string
    title:string
    description:string
}

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

// we use an array t ostore the data
let posts: Post[] = [];

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


// handlers
export const getPosts = () => posts;

export const addPosts = (post:Post) => {
    posts.push(post);
};

export const deletePosts = (id:string) => {
    posts = posts.filter((post) => post.id !== id);
};

export const updatePosts = (id:string, title:string, description:string) => {
    const post = posts.find((post) => post.id);

    if(post){
        post.title = title;
        post.description = description;
    }else{
        throw new Error("put error")
    }
}

export const getById = (id:string) => {
    return posts.find((post) => post.id === id);
};

