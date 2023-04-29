import bcrypt from "bcrypt";
import prismadb from "../../../lib/prismadb";

// handling POST request
export async function POST(request) {
  try {
    const res = await request.json();

    const { email, password, name } = res;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email: email,
      },
    });

    // if the email is already used
    if (existingUser) {
      return new Response({ status: 422, error: "Email Taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        emailVerified: new Date(),
      },
    });

    return Response.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response({ status: 400 });
  }
}
