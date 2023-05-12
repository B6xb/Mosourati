import prismadb from "@/lib/prismadb";

export default async function (req, res) {
  if (req.method === "GET") {
    const query = req.query;
    const { id } = query;
    console.log(id);
    const comment = await prismadb.comment.findMany({
      where: {
        postId: id,
      },
      include: {
        post: true,
        user: true, // include the user relation in the result
      },
    });

    if (comment === null) {
      return res.json("No Comments Yet");
    } else {
      return res.json(comment);
    }
  } else if (req.method === "POST") {
    const { text, userId, postId } = req.body;
    const newComment = await prismadb.comment.create({
      data: {
        text: text,
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
      },
    });
    return res.json(newComment, { status: 200 });
  }
}
