import formidable from "formidable";
import { uploads } from "@/utils/cloudinary";
import prismadb from "@/lib/prismadb";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  console.log(req.body);
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    // Retrieve the user ID from the request body
    const userId = fields.userId;

    console.log(JSON.stringify(files));
    const path = files.file.filepath;
    const cloudinaryUrl = await uploads(path);
    console.log(cloudinaryUrl);

    const post = await prismadb.post.create({
      data: {
        file: cloudinaryUrl.url,
        user: { connect: { id: userId } },
      },
      include: {
        user: true, // include the user relation in the result
      },
    });
    // res.json(post, { status: 200 });
    return res.json(post, { status: 200 });
  });
};
