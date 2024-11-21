import "dotenv/config";
import app from "./app";
import { NODE_ENV, PORT } from "./constants/env";
import { connectDB } from "./lib";

// health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Healthy" });
});

app.listen(PORT, () => {
  connectDB().then(() => {
    console.log(`Server is listening on port ${PORT} in ${NODE_ENV} environment`);
  });
});
