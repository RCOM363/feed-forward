import { Router } from "express";
import {
  addFoodRequest,
  updateFoodRequest,
  deleteFoodRequest,
  getRecipientFoodRequests,
  getFoodRequests,
  fulfillFoodRequest,
} from "../controllers/foodRequest.controller.js";
import {
  verifyJWT,
  isDonor,
  isRecipient,
} from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { generalGetLimiter, requestLimiter } from "../utils/rateLimiters.js";

const router = Router();

router
  .route("/add-request")
  .post(requestLimiter, upload.none(), verifyJWT, isRecipient, addFoodRequest);

router
  .route("/update-request/:requestId")
  .patch(
    requestLimiter,
    upload.none(),
    verifyJWT,
    isRecipient,
    updateFoodRequest
  );

router
  .route("/delete-request/:requestId")
  .delete(requestLimiter, verifyJWT, isRecipient, deleteFoodRequest);

router
  .route("/get-recipient-requests")
  .get(generalGetLimiter, verifyJWT, isRecipient, getRecipientFoodRequests);

router
  .route("/get-requests")
  .get(generalGetLimiter, verifyJWT, isDonor, getFoodRequests);

router
  .route("/fulfill-request/:requestId")
  .post(requestLimiter, verifyJWT, isDonor, fulfillFoodRequest);

export default router;
