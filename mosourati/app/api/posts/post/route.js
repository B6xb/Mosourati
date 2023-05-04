import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { file, userId } = request.body;
    if (!file) {
      return NextResponse.json(
        { msg: "Please enter an icon url" },
        { status: 400 }
      );
    }

    const post = await prismadb.post.create({
      data: {
        file: file,
        user: { connect: { id: userId } },
      },
      include: {
        user: true,
      },
    });

    return post;
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}
