import express from "express";
import connectDb from "./db/db_connection.js";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

connectDb(mongoUri);

app.use("/api/v1", contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
