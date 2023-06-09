import prismadb from "@/lib/prismadb";

const getPost = async (req, res) => {
  const query = req.query;
  const { id } = query;
  console.log(id);
  const post = await prismadb.post.findUnique({
    where: {
      id: id,
    },
  });
  console.log(post);
  return res.json(post);
};
export default async (req, res) => {
  if (req.method === "GET") {
    return await getPost(req, res);
  }
};
