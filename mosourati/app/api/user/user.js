import connectDB from "../../../utils/db.js";
import Account from "../../../models/account.js";

export default async function handler(req, res) {
  const { method } = req;

  const conn = await connectDB();

  console.log(conn);

  switch (method) {
    case "GET":
      try {
        const account = await Account.find({});
        res.status(200).json({ success: true, data: account });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const account = await Account.create(req.body);
        res.status(201).json({ success: true, data: account });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
