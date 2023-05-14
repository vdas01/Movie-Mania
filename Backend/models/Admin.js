import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  addedMovies: [
    {
      //reference to Movie collection and object id of that collection
      type: mongoose.Types.ObjectId,
      ref: "Movie",
    },
  ],
});

export default mongoose.model("Admin", adminSchema);
