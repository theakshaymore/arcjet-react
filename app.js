// external packgaes import
import express from "express";
import cors from "cors";

// internal imports
import authRoutes from "./routes/authRoute.js";

const app = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Root Page");
});

//
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`SERVER CONNECTED TO PORT ${port}`);
});
