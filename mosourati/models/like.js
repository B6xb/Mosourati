import { model, models, Schema } from "mongoose";

const likeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});

const Like = models.Like || model("Like", likeSchema);

export default Like;
