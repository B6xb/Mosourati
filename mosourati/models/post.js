import { model, models, Schema } from "mongoose";

const postSchema = new Schema({
  file: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = models.Post || model("Post", postSchema);

export default Post;
