import { configureStore } from "@reduxjs/toolkit";
import { chattingReducer } from "./Chatting/Reducer";

export const store = configureStore({
	reducer: {
		chatting: chattingReducer,
	},
});
