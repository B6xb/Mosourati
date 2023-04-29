import { model, models, Schema } from "mongoose";

const commentSchema = new Schema({
  text: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
