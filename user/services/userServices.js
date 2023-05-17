const User = require("../models/User");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const LOGIN_SECRET = "T26$QTr1h)E9g!EtjsfSVcRx";

// type appProps = {
// 	req: any,
// 	res: any
// }

const checkUser = async (req, res) => {
	// console.log(req);
	const checkUser = await User.exists({ userName: req.userName });
	return checkUser;
};

const sendCode = async (req, res) => {
	function generateCode() {
		var string =
			"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let Code = "";

		// Find the length of string
		var len = string.length;
		for (let i = 0; i < 6; i++) {
			Code += string[Math.floor(Math.random() * len)];
		}
		return Code;
	}

	let testAccount = await nodemailer.createTestAccount();
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: "nayanrathod23@gmail.com", // generated ethereal user
			pass: "irfvlcfnrplyjjpl", // generated ethereal password
		},
	});
	let info = await transporter.sendMail({
		from: "nayanrathod23@gmail.com", // sender address
		to: req.userName,
		subject: "Here’s the access code to create Yuezers account", // Subject line
		// text: "Hello Nayan Text", // plain text body
		html:
			'<div style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;"> <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: #fff;"> <tbody> <tr> <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;"> <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;"> <tbody> <tr> <td style="padding: 40px 0px 0px;"> <div style="text-align: left;"> <div style="padding-bottom: 20px;"><img src="https://yuezers.com" alt="Company" style="width: 56px;"></div> </div> <div style="padding: 20px; background-color: rgb(255, 255, 255);"> <div style="color: rgb(0, 0, 0); text-align: left;"> <h1 style="margin: 1rem 0">Verification code</h1> <p style="padding-bottom: 16px">Please use the verification code below to sign in.</p> <p style="padding-bottom: 16px"><strong style="font-size: 130%">' +
			generateCode() +
			'</strong></p> <p style="padding-bottom: 16px">If you didn’t request this, you can ignore this email.</p> <p style="padding-bottom: 16px">Thanks,<br>The Orbit team</p> </div> </div> <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;"> <p style="padding-bottom: 16px">Made with ♥ in Paris</p> </div> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table></div>', // html body
	});

	// const checkUser = await User.exists({ userName: req.body.userName });
	// return checkUser;
};

const createUser = async (req, res) => {
	const data = new User(req);
	const customerResult = await data.save();
	return customerResult;
};

module.exports = {
	checkUser,
	sendCode,
	createUser,
};
