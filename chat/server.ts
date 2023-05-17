import express from "express";
const {PORT} = require('./config')
import dbConnection from "./dbConnection";
import cors from 'cors';

import router from './routes';

const StartServer = async () => {
	const app = express();

	await dbConnection();

	app.use(express.json());
	app.use(cors());
	app.use(express.static(__dirname + "/public"));

	app.use('/api/chat', router);

	app.listen(PORT, () => {
		console.log(`listening to port ${PORT}`);
	})
		.on("error", (err: any) => {
			console.log(err);
			process.exit();
		})
		.on("close", () => {
			// channel.close();
		});
};

StartServer();
