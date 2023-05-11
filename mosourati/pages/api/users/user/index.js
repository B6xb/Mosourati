import prismadb from "@/lib/prismadb";

const getUser = async (req, res) => {
  const query = req.query;
  const { id } = query;
  console.log(id);
  const user = await prismadb.user.findUnique({
    where: {
      id: id,
    },
  });
  console.log(user);
  return res.json(user);
};
export default async (req, res) => {
  if (req.method === "GET") {
    return await getUser(req, res);
  }
};
