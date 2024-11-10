import express from "express";
import dbConnection from "./dbConnection";
import cors from "cors";

import router from "./routes";

// const app = express();
const StartServer = async () => {
	const app = express();

	await dbConnection();

	app.use(express.json());
	app.use(cors());
	// app.use(express.static(__dirname + "/public"));

	app.use("/api/user", router);

	app.listen(4000, () => {
		console.log(`listening to port 4000`);
	})
		.on("error", (err:any) => {
			console.log(err);
			process.exit();
		})
		.on("close", () => {
			// channel.close();
		});
};

StartServer();
