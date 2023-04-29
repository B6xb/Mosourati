import User from "../../../../models/user";
import dbConnect from "@/utils/db";

// Getting a user
export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);

    console.log(searchParams);
    const data = searchParams;

    const email = data.get("email");
    const password = data.get("password");

    const user = await User.find({ email: email });

    if (!user) {
      console.log("There is no User with that email");
    } else {
      return new Response(`${user}`, { status: 200 });
    }
  } catch (error) {
    return new Response(error, { status: 400, success: false });
  }
}

// Creating a user
export async function POST(request) {
  try {
    await dbConnect();
    const res = await request.json();
    const newUser = await User.create(res);

    return Response.json(res, { status: 200 });
  } catch (error) {
    return new Response(error, { status: 400, success: false });
  }
}