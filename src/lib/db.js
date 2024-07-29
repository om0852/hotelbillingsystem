import mongoose from "mongoose";
let isConnected = false;
export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("mongodb is already connected");
        return;

    }
    try {
        await mongoose.connect('mongodb+srv://smartcoder0852:zVWbXMnVgt7dnP0U@cluster0.lfofxmp.mongodb.net/hotelbillingsystem')
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}