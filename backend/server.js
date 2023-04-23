const express = require("express");
const dotev = require("dotenv").config();
const port = process.env.port || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("../backend/routes/goalRoutes"));
app.use("/api/users", require("../backend/routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port: ", port);
});
