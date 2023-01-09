import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import itemsRouter from "./components/items.router"

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://PavithraChandarS:Pavithra0501@cluster0.hzly1jq.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected to Mongo DB");
    } catch (error) {
        console.log("Error : ", error)
        throw error;
    }
};

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/menu/items", itemsRouter );

app.listen(PORT, () => {
    connect()
    console.log(`Listening on port ${PORT}`);
});

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
});
