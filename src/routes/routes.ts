
import {Router} from "express"
import { UserController } from "../controllers/userController";
const router = Router();

router.post("/user",UserController.createUser);
router.get("/user/:userId",UserController.readUser);
router.get("/users",UserController.readAllUsers);
router.put("/user/:userId",UserController.updateUser);
//router.put("/upsert/:userId",UserController.upsertUser);
router.delete("/user/:userId",UserController.deleteUser);

export default router