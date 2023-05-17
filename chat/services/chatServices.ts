type appProps = {
	req: any,
	res: any
}

const sendMessage = async ({ req, res }: appProps) => {
	console.log("sendMessage service");
}

const receiveMessage = async ({ req, res }: appProps) => {
	console.log("receiveMessage service");
}

const getMessages = async ({ req, res }: appProps) => {
	console.log("getMessages service");
}

const listConversations = async ({ req, res }: appProps) => {
	console.log("listConversations service");
}

export default {
	sendMessage,
	receiveMessage,
	getMessages,
	listConversations
}