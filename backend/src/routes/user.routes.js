import { Router } from "express";
import {
  donorSignUp,
  recipientSignUp,
  userLogin,
  userLogout,
  createCityAdmin,
  getUserProfile,
  getDashboardStats,
} from "../controllers/user.controller.js";
import { verifyJWT, isAdmin } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  loginLimiter,
  signUpLimiter,
  generalGetLimiter,
} from "../utils/rateLimiters.js";

const router = Router();

router
  .route("/donor-signup")
  .post(signUpLimiter, upload.single("avatarImage"), donorSignUp);
router
  .route("/recipient-signup")
  .post(signUpLimiter, upload.single("avatarImage"), recipientSignUp);
router.route("/login").post(loginLimiter, upload.none(), userLogin);

// secured routes
router.route("/logout").post(generalGetLimiter, verifyJWT, userLogout);
router
  .route("/create-city-admin")
  .post(signUpLimiter, upload.none(), verifyJWT, isAdmin, createCityAdmin);
router
  .route("/get-user-profile")
  .get(generalGetLimiter, verifyJWT, getUserProfile);
router
  .route("/get-dashboard-stats")
  .get(generalGetLimiter, verifyJWT, getDashboardStats);

export default router;
