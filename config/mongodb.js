import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = `${process.env.MONGODB_URI}/e-commerce?retryWrites=true&w=majority`;
        await mongoose.connect(uri); 
        console.log("✅ DB Connected to MongoDB Atlas");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
