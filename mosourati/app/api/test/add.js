import "../../../utils/db";
import "../../../model/testModel";

/**
 *
 * @param {import('next')NextApiRequest} req
 * @param {import('next')NextApiResponse} res
 */

export default async function addTest(req, res) {
  console.log("Connecting to MONGODB");

  await connectDB();

  console.log("Connected to MONGODB");

  const test = await Test.create(req.body);

  res.json({ test });
}
