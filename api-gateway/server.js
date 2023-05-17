const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/", proxy("http://localhost:4000"));
app.use("/user", proxy("http://localhost:4000"));
app.use("/chat", proxy("http://localhost:5000"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
