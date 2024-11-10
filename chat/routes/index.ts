const router = require('express').Router();
import chatController from "../controller/chatController";

router.route('/sendMessage').get(chatController.sendMessage);
router.route('/receiveMessage').get(chatController.receiveMessage);
router.route('/getMessages').get(chatController.getMessages);
router.route('/listConversations').get(chatController.listConversations);

export default router