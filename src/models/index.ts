// Dependencies
import mongoose from "mongoose";

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);

console.log("stated");

export * from "./User";
export * from "./Scene";
