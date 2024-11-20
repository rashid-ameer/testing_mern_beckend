import "dotenv/config";
import app from "./app";
import { PORT } from "./constants/env";
import connectDB from "./lib/db";

// health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Healthy" });
});

app.listen(PORT, () => {
  connectDB().then(() => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
