
import {Router} from "express"
import UserController from "../controllers/userController";
const router = Router();

router.post("/create",UserController.create);


export default router