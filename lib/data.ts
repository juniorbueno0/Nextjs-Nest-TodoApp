import axios from 'axios';

type Post = {
    id: string
    title:string
    description:string
}

export type Todos = {
    title: string
    description:string
    status:string
}

// we use an array t ostore the data
let posts: Post[] = [];

// it works :)
export async function getTodos(): Promise<Todos[]> {
  const response = await axios.get('http://localhost:3001/todo');
  return response.data;
}

export async function createTodos(user: Todos){
    // const response = await axios.get('http://localhost:3001/todo');
    // return response.data;
    console.log(user)
    axios.post('http://localhost:3001/todo', user)
    .then(() => {
        return 'OK';
    })
    .catch((error) => {
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

