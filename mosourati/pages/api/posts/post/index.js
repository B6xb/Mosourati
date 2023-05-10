import prismadb from "@/lib/prismadb";

const getPost = async (req, res) => {};

export default async (req, res) => {
  if (req.method === "GET") {
    return await getPosts(req, res);
  }
};
