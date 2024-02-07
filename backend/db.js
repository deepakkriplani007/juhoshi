import mongoose from "mongoose";
const mongoURI =
  "mongodb+srv://deepakkriplani007:bejpEnRVSZEUdpea@cluster0.hm5gzo3.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("database connection established");
  } catch (err) {
    console.log("error connecting to database: " + err);
  }
};
export default connectToMongo;
