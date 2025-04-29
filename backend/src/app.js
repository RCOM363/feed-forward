import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //allowed to access to the server
    credentials: true, //allows credentails such as cookies to be sent
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import adminRouter from "./routes/admin.routes.js";
import cityAdminRouter from "./routes/cityAdmin.routes.js";
import userRouter from "./routes/user.routes.js";
import foodPostRouter from "./routes/foodPost.routes.js";
import foodRequestRouter from "./routes/foodRequest.routes.js";
import donationRouter from "./routes/donation.routes.js";

// routes declarations
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/cityAdmin", cityAdminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/foodPost", foodPostRouter);
app.use("/api/v1/foodRequest", foodRequestRouter);
app.use("/api/v1/donation", donationRouter);

export { app };
