import mongoose from "mongoose";
import { mongo } from "../config/environment";

const connectToDB = async () => {
  await mongoose
    .connect(mongo.url, {
      useNewUrlParser: true,
    })
    .then(() => console.log(`Successfully connected to database.`))
    .catch((error) => console.log(error));
};

export default connectToDB;
