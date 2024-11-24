import { Router } from "express";
import {
  addFoodRequest,
  updateFoodRequest,
  deleteFoodRequest,
  getRecipientFoodRequests,
  getFoodRequests,
} from "../controllers/foodRequest.controller.js";
import {
  verifyJWT,
  isDonor,
  isRecipient,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/add-request").post(verifyJWT, isRecipient, addFoodRequest);
router
  .route("/update-request/:requestId")
  .patch(verifyJWT, isRecipient, updateFoodRequest);
router
  .route("/delete-request/:requestId")
  .delete(verifyJWT, isRecipient, deleteFoodRequest);
router
  .route("/get-recipient-requests")
  .get(verifyJWT, isRecipient, getRecipientFoodRequests);
router.route("/get-requests").get(verifyJWT, isDonor, getFoodRequests);

export default router;
