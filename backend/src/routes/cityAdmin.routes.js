import { Router } from "express";
import {
  getVerificationList,
  verifyRecipient,
  rejectRecipient,
  getFoodPosts,
  getFoodRequest,
} from "../controllers/cityAdmin.controller.js";
import { verifyJWT, isCityAdmin } from "../middlewares/auth.middleware.js";
import { cityAdminLimiter } from "../utils/rateLimiters.js";

const router = Router();

// secured routes
router
  .route("/get-verification-list")
  .get(cityAdminLimiter, verifyJWT, isCityAdmin, getVerificationList);
router
  .route("/verify-recipient/:id")
  .patch(cityAdminLimiter, verifyJWT, isCityAdmin, verifyRecipient);
router
  .route("/reject-recipient/:id")
  .delete(cityAdminLimiter, verifyJWT, isCityAdmin, rejectRecipient);

router
  .route("/get-food-posts")
  .get(cityAdminLimiter, verifyJWT, isCityAdmin, getFoodPosts);
router
  .route("/get-food-requests")
  .get(cityAdminLimiter, verifyJWT, isCityAdmin, getFoodRequest);

export default router;
