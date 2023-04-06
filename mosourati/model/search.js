import { Schema, model, models } from "mongoose";

const seacrhSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const Search = models.Search || models("Search", seacrhSchema);

export default Search;
