import { connect } from "mongoose";
// const { DB_URL } = require("./config");

const dbConnection = async () => {
	try {
		await connect(
			"mongodb+srv://yuezersMicro:TUdI3ZqzC7lHGcIa@yuezers.lsj7xjq.mongodb.net/micro_chat"
		);
		console.log("Db Connected");
	} catch (error) {
		console.log("Error ============");
		console.log(error);
	}
};

export default dbConnection