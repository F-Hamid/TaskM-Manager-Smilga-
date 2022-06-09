require("./db/connect");

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);

app.listen(port, () => console.log("App listening on port 3000... "));
