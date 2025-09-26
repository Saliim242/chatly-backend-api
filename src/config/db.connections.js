import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_URL);
    console.log(
      `Connected to MongoDB ${conn.connection.host} and ${conn.connection.name}`
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
    process.exit(1); // exit the process with failur
  }
};

export default connectToDB;
