import { Router } from "express";
import {
  getCityAdmins,
  removeCityAdmin,
} from "../controllers/admin.controller.js";
import { verifyJWT, isAdmin } from "../middlewares/auth.middleware.js";
import { adminLimiter } from "../utils/rateLimiters.js";

const router = Router();

// secured routes
router
  .route("/get-city-admins")
  .get(adminLimiter, verifyJWT, isAdmin, getCityAdmins);
router
  .route("/remove-city-admin/:id")
  .delete(adminLimiter, verifyJWT, isAdmin, removeCityAdmin);

export default router;
