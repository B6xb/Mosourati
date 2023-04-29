import { model, models, Schema } from "mongoose";

const likeSchema = new Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
});

const Like = models.Like || model("Like", likeSchema);

export default Like;
