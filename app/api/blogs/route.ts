import { NextResponse } from "next/server";
import { addPosts, getPosts } from "@/lib/data";

export const GET = async (req:Request, res: Response) => {
    console.log("GET Request <<<");
    try {
        const  posts = getPosts();
        return NextResponse.json({message:"OK", posts}, {
            status:200
        });
    } catch (error) {
        return NextResponse.json({ message:"Error", error},{
            status:500
        });
    }
};

export const POST = async (req:Request, res: Response) => {
    console.log("POST Request");
    // get 2 params only
    const {title, description} = await req.json();

    try {
        // we save the 2 params and generate the third one 
        const post = {
            title, 
            description, 
            id: Date.now().toString()
        };

        console.log(post.id);

        addPosts(post);

        return NextResponse.json({message:"OK", post}, {
            status:200
        });
    } catch (error) {
        return NextResponse.json({ message:"Error", error},{
            status:500
        });
    }
};