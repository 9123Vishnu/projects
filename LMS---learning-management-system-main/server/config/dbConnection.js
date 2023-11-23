import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const MONGO_URL = "mongodb+srv://vishnuvardhan21bce9004:gANESH1121@cluster0.lxhgfpf.mongodb.net/?retryWrites=true&w=majority"

const connectionToDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URL);
        if (connection) {
            console.log(`Connected to MongoDB: ${connection.host}:${connection.port}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectionToDB;
