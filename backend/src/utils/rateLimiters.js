import { rateLimit } from "express-rate-limit";

// auth
export const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many login attempts. Try again later.",
});

export const signUpLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "Too many signups from this IP. Try again in an hour.",
});

// profile & dashboard
export const generalGetLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 60,
  message: "Too many requests. Try again in 10 minutes",
});

// food post
export const postLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
  message: "Too many food post actions. Please wait a while.",
});
