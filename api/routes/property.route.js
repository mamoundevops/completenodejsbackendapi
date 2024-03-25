import express from "express";
import {
  createProperty,
  deleteProperty,
  updateProperty,
} from "../controllers/property.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createProperty);
router.delete("/delete/:id", verifyToken, deleteProperty);
router.post("/update/:id", verifyToken, updateProperty);

export default router;
