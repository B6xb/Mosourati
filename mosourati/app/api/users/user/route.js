import Account from "../../../../models/account";
import dbConnect from "@/utils/db";

// Getting a user
export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);

    const account = searchParams.get("email");

    const user = await Account.find({ email: account });

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
    const account = await Account.create(res);

    return Response.json(res, { status: 200 });
  } catch (error) {
    return new Response(error, { status: 400, success: false });
  }
}
