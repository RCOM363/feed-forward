import asyncHandler from "express-async-handler";

import { ApiResponse } from "../utils/ApiResponse.js";

export const healthCheck = asyncHandler(async (_, res) => {
  return res.status(200).json(new ApiResponse(200, "Server is running"));
});
