import { Schema, model, models } from "mongoose";
import validator from "validator";

const accountSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please Enter a valid email",
    },
    lowercase: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter a password"],
    minlength: 6,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const Account = models.Account || model("Account", accountSchema);

export default Account;
