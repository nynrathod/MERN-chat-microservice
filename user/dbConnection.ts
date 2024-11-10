import { connect } from "mongoose";
const { DB_URL } = require("./config");

const dbConnection = async () => {
	try {
		await connect(
			DB_URL
		);
		console.log("Db Connected");
	} catch (error) {
		console.log("Error ============");
		console.log(error);
	}
};

export default dbConnection