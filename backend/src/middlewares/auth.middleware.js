import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(400, "Unauthorized access");
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(decodedToken.id);
    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message);
  }
});

export const isCityAdmin = asyncHandler(async (req, _, next) => {
  if (req.user?.role !== "city-admin") {
    throw new ApiError(401, "Unauthorized access to city admin");
  }
  next();
});

export const isAdmin = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(400, "Unauthorized access to admin");
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (decodedToken.role !== "admin") {
      throw new ApiError(401, "Invalid access token");
    }
    req.isAdmin = true;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message);
  }
});
