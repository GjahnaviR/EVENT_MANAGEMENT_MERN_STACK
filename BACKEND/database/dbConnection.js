import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "event_management",
    });
    console.log("Connected to database successfully!");
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    // Exit process with failure
    process.exit(1);
  }
};
