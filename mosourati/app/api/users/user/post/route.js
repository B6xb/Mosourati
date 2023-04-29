import Post from "../../../../../models/post";
import dbConnect from "@/utils/db";

// Reading a post
export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);

    const data = searchParams;

    const id = data.get("id");

    const post = await Post.find({ id: id });

    if (!post) {
      console.log("There is no Post with that ID");
    } else {
      return new Response(`${post}`, { status: 200 });
    }
  } catch (error) {
    return new Response(error, { status: 400, success: false });
  }
}

// Creating a post
export async function POST(request) {
  try {
    await dbConnect();
    const res = await request.json();
    const newPost = Post.create(res);

    return Response.json(res, { status: 200 });
  } catch (error) {
    return new Response(error, { status: 400, success: false });
  }
}
