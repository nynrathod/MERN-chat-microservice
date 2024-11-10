import chatServices from "../services/chatServices"

type appProps = {
	req: any,
	res: any,
}

const sendMessage = async ({ req, res }: appProps) => {
   const data = await chatServices.sendMessage(req);
}

const receiveMessage = async ({ req, res }: appProps) => {
	const data = await chatServices.sendMessage(req);
}

const getMessages = async ({ req, res }: appProps) => {
   const data = await chatServices.sendMessage(req);
}

const listConversations = async ({ req, res }: appProps) => {
   const data = await chatServices.sendMessage(req);
}

export default {
	sendMessage,
	receiveMessage,
	getMessages,
	listConversations
}