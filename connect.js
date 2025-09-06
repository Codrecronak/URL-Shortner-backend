import mongoose from "mongoose";

async function connectMongo(url) {
  return mongoose.connect(url);
}
export { connectMongo };
