const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://hamid:1234@smilgaprojects.odkhmbz.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString,)
  .then(() => console.log("connected to the db"))
  .catch((err) => console.log(err));
