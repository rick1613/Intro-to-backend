import express from "express";

const app = express(); // create a express app
app.use(express.json());

// import routes
import userRouter from "./routes/user.route.js";

// declare the routes

app.use("/api/v1/user", userRouter);

//example route : https://localhost:4000/api/v1/user/register

export default app;
