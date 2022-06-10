const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);
// Not Found
app.use("/*", (req, res) => {
  res.status(404).send("Uknown");
});
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => console.log(`App listening on port ${port}... `));
  } catch (err) {
    console.log(err);
  }
};

start();
