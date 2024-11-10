// const socket = require("socket.io");
import { Socket } from "socket.io";
const User = require("./models/User");

const express = require('express')
const app = express()
export default function socketio(io: any) {

	interface ConnectedUsers {
		[socketId: string]: string; // Mapping of socketId to userId
	}

	const connectedUsers: ConnectedUsers = {};

	io.on('connection', (socket: any) => {

		socket.on('userOnline', async (userId: any) => {
			connectedUsers[socket.id] = userId;

			try {
				// Update user's online status in the database
				await User.findByIdAndUpdate(userId, { isOnline: true, socketId: socket.id });
				console.log(`User ${userId} is online`);

				// Broadcast the user's online status to other clients
				socket.broadcast.emit('userOnline', userId);
			} catch (error) {
				console.error(error);
			}
		});

		// console.log(`⚡: ${socket.id} user just connected!`);
		socket.on('disconnect', async () => {

			console.log('Client disconnected');
			const userId = connectedUsers[socket.id];
			console.log(userId);

			if (userId) {
				try {
					// Update user's isOnline status to false in the database
					await User.findByIdAndUpdate(userId, { isOnline: false });
					console.log(`User ${userId} is now offline.`);

					// Remove the mapping from connectedUsers
					delete connectedUsers[socket.id];
					socket.broadcast.emit('userOffline', userId);
				} catch (error) {
					console.error('Failed to update user online status:', error);
				}
			}

		});
	});
}