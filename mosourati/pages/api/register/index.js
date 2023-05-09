import bcrypt from "bcrypt";
import prismadb from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const res = await req.body;

      const { email, password, name } = res;

      const existingUser = await prismadb.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      });

      // if the email is already used
      if (existingUser) {
        return res.json({ error: "Email Taken" }, { status: 422 });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prismadb.user.create({
        data: {
          name: name,
          email: email.toLowerCase(),
          hashedPassword: hashedPassword,
          emailVerified: new Date(),
        },
      });

      return res.json(
        {
          user: {
            name: user.name,
            email: user.email,
          },
        },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
      return res.json(error, {
        status: 500,
      });
    }
  }
}
