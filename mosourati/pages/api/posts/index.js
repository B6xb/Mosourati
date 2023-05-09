import prismadb from "@/lib/prismadb";

const getPosts = async (req, res) => {
  const posts = await prismadb.post.find();
  console.log(posts);
  return res.json(posts);
};
export default async (req, res) => {
  if (req.method === "GET") {
    return await getPosts(req, res);
  }
};
