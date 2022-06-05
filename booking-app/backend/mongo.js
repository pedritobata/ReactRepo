import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo running...");
  } catch {
    throw new Error("Mongo connection failed");
  }
}

mongoose.connection.on('disconnected', () => {
    console.log('Mongo is disconnected');
});

mongoose.connection.on('connected', () => {
    console.log('Mongo is connected');
});

export default connect;
