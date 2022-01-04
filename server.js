import express from "express";
import path from "path";
import connectDB from "./config/db.js";
import colors from "colors";
import questionRoutes from "../backend/routes/questionRoutes.js";

const port = 5001;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/questions", questionRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
  });

app.listen(port, (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log(`Server running on port: ${port}`);
    }
  });

//  http://localhost:5001/api/questions/qp?subject=Physics&topic=Waves&marksTotal=100&easyRatio=20&mediumRatio=30&hardRatio=50&esMrk=2&mdMrk=3&hdMrk=5

export default app;