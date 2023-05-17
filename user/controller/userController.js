const userServices = require("../services/userServices");

// type appProps = {
// 	req: any,
// 	res: any,
// 	next: any,
// }

const checkUser = async (req, res) => {
	const data = await userServices.checkUser(req.body);
	res.json(data);
};

const sendCode = async (req, res) => {
	const data = await userServices.sendCode(req.body);
	res.json(data);
};

const createUser = async (req, res) => {
	const data = await userServices.createUser(req.body);
	res.json(data);
};

module.exports = {
	checkUser,
	sendCode,
	createUser,
};
