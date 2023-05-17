const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		userName: { type: String, unique: true },
		firstName: { type: String },
		lastName: { type: String },
		profilePic: { type: String },
		otpNo: { type: Number },
	},
	{
		timestamps: true,
	}
);
const User = mongoose.model("User", userSchema);

module.exports = User;
