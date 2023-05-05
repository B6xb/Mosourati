import bcrypt from "bcrypt";
import prismadb from "../../../lib/prismadb";
import { NextResponse } from "next/server";

// handling POST request
export async function POST(request) {
  try {
    const res = await request.json();

    const { email, password, name } = res;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    // if the email is already used
    if (existingUser) {
      return new NextResponse({ status: 422, error: "Email Taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: hashedPassword,
        emailVerified: new Date(),
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}
