import { createEdgeRouter } from "next-connect";
// import { newPost } from "@/backend/controllers/postController";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

const router = createEdgeRouter();

// router.use();

// router.get((req) => {
//   const posts = getUsers(req);
//   return NextResponse.json({ users });
// });

const token = getSession();

console.log(token);

router.post(async (req) => {
  const body = await req.json();

  console.log(body);

  //   const post = await prismadb.post.create({
  //     data: {
  //       ...body,
  //     },
  //     include: {
  //       user: true,
  //     },
  //   });

  const res = NextResponse.json({
    message: "User has been created",
  });
  return { res };
});

export async function GET(request) {
  return router.run(request);
}

export async function POST(request) {
  return router.run(request);
}
