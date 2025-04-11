import mongoose from "mongoose";


const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to MongoDB");
        })

        connection.on("error", (err) => {
            console.log("MongoDB connecting error" + err);
            process.exit();
        })
        
    } catch (error) {
        console.error("Error connecting to MongoDB:");
        console.error(error);
    }
};

export default dbConnect;