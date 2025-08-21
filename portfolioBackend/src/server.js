// Packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio Backend API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
