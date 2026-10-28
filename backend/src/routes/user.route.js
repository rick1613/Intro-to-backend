import { Router } from "express";
import { registeredUser } from "../controller/user.controller.js";
import { loginUser } from "../controller/user.controller.js";
import { logoutUser } from "../controller/user.controller.js";
const router = Router();

router.route("/register").post(registeredUser);

router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
export default router;
