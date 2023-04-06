import { model, models, Schema } from "mongoose";

const commentSchema = new Schema({
  text: { type: String, required: true },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
