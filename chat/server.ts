import express from "express";
import dbConnection from "./src/common/dbConnection";
import cors from "cors";
import { initializeSocket } from "./src/common/sockets/socket";
import { subscribeMessage, createChannel, publishMessage } from "./src/common/RabbitMq/rabbitmq";
import config from "./src/config";

const StartServer = async () => {
	const app = express();

	await dbConnection();

	var corsOptions = {
		origin: "http://127.0.0.1:5173",
		optionsSuccessStatus: 200,
	};
	app.use(express.json());
	app.use(cors(corsOptions));

	const server = app.listen(config.PORT, () => {
		console.log(`listening to port ${config.PORT}`);
	})
		.on("error", (err: any) => {
			console.log(err);
			process.exit();
		})
		.on("close", () => {
			// channel.close();
		});
	const channel = await createChannel()

	await initializeSocket(server, channel);

};

StartServer();
