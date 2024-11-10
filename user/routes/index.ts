import { Router } from "express";
const router = Router();
const userController = require("../controller/userController");

router.get("/checkUser", userController.checkUser);
router.post("/sendCode", userController.sendCode);
// router.post("/verifyOtp", userController.verifyOtp);
router.post("/createuser", userController.createUser);
// router.post("/loginUser", userController.loginUser);

export default router;