import express from "express";
import { addDoctor, getAllDoctors, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.get("/all-doctors", authAdmin, getAllDoctors);
adminRouter.patch("/change-availability", authAdmin, changeAvailability);



export default adminRouter;
