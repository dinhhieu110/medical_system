import express from "express";
import { getUserDetails, login, register, updateUserDetails } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/get-profile", authUser, getUserDetails);
userRouter.patch("/update-profile", upload.single('image'), authUser, updateUserDetails)





export default userRouter;
