import { Router } from "express";
import {
  addFoodPost,
  updateFoodPost,
  deleteFoodPost,
  getDonorFoodPosts,
  getAvailableFoodPosts,
  requestFood,
} from "../controllers/foodPost.controller.js";
import {
  verifyJWT,
  isDonor,
  isRecipient,
} from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { generalGetLimiter, postLimiter } from "../utils/rateLimiters.js";

const router = Router();

// secured routes
router
  .route("/add-post")
  .post(postLimiter, upload.array("images"), verifyJWT, isDonor, addFoodPost);

router
  .route("/update-post/:postId")
  .patch(
    postLimiter,
    upload.array("images"),
    verifyJWT,
    isDonor,
    updateFoodPost
  );

router
  .route("/delete-post/:postId")
  .delete(postLimiter, verifyJWT, isDonor, deleteFoodPost);

router
  .route("/get-donor-posts")
  .get(generalGetLimiter, verifyJWT, isDonor, getDonorFoodPosts);

router
  .route("/get-available-posts")
  .get(generalGetLimiter, verifyJWT, isRecipient, getAvailableFoodPosts);

router
  .route("/request-food/:postId")
  .post(postLimiter, verifyJWT, isRecipient, requestFood);

export default router;
