import { model, models, Schema } from "mongoose";

const postSchema = new Schema({
  file: { type: String, required: true },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = models.Post || model("Post", postSchema);

export default Post;
