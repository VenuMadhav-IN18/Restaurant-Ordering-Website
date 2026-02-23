import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

config();
connectDB();

const app = express();

app.use(cors());
app.use(json());

app.use("/api/auth", (await import("./routes/authRoutes.js")).default);

app.listen(5000, () => console.log("Server running on port 5000"));