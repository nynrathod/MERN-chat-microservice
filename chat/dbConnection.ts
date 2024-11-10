const mongoose = require("mongoose");
// const { DB_URL } = require("./config");

const dbConnection = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/micro_chat", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Db Connected");
	} catch (error) {
		console.log("Error ============");
		console.log(error);
	}
};

export default dbConnection;
