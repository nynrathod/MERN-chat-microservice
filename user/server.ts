import express from "express";
import dbConnection from "./src/common/dbConnection";
import cors from "cors";
import router from "./src/routes";
import { initializeSocket, io } from "./src/common/sockets/socket";
import { createChannel, publishMessage, subscribeMessage } from "./src/common/RabbitMq/rabbitmq";
import config from "./src/config";
import messageController from './src/controller/messageController';
import chatController from './src/controller/chatController';

const StartServer = async () => {
	const app = express();

	await dbConnection();

	var corsOptions = {
		origin: "http://127.0.0.1:5173",
		optionsSuccessStatus: 200,
	};
	app.use(express.json());
	app.use(cors(corsOptions));
	// app.use(express.static(__dirname + "/public"));

	app.use("/api/user", router);

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


	const channel = await createChannel();

	await initializeSocket(server, channel);

	// await publishMessage(channel, config.QUEUE_NAME, "mmg");

	await subscribeMessage("USER_SERVICE_QUEUE", (message) => {
		// console.log('Received message:', message);
	});
	messageController.messages(io);
	chatController.chats(io);
};

StartServer();
