import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

import promisify from "util";

const readFileAsync = promisify(fs.readFile);

export async function POST(request) {
  try {
    const file = await readFileAsync(request.file.path);
    const { userId } = request.body;

    const post = await prismadb.post.create({
      data: {
        image: file,
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
