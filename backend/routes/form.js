import express from "express";
import { createForm, getdata, verifydata } from "../controller/createForm.js";
const router = express.Router();
router.post("/", createForm);
router.post("/verify", verifydata);

router.get("/getall", getdata);
export default router;
