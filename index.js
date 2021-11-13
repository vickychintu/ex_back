const express = require("express");
const connectDB = require("./config/db");
const app = express();
const User = require("./model/User");
connectDB();
app.use(express.json({ extended: false }));

// client = mqtt.connect({
//   host: "192.168.3.81",
//   port: 1883,
//   // username: "lazyidlyiot",
//   // password: "1234qwerty",
// });

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("API Running");
});


//API Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/timestamp", require("./routes/api/timestamp"));

app.listen(PORT, () => {
  //   debug(`App listening at http://localhost:${PORT}`);
  console.info(`App listening at http://localhost:${PORT}`);
});
