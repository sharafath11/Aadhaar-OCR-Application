import "reflect-metadata"
import "./core/di/container"
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adharRoutes from "./routes/adharOcr.routes"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/",adharRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
