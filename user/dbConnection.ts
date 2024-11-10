import { connect } from "mongoose";
// const { DB_URL } = require("./config");

const dbConnection = async () => {
	try {
		await connect("mongodb://localhost:27017/micro_chat");
		console.log("Db Connected");
	} catch (error) {
		console.log("Error ============");
		console.log(error);
	}
};

export default dbConnection;
