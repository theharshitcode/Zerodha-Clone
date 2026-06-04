require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/MongoDB");

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});