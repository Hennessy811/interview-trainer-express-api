import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import loginRouter from "./routes/login";
import scenesRouter from "./routes/scenes";
import sessionsRouter from "./routes/sessions";

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/scenes", scenesRouter);
app.use("/sessions", sessionsRouter);

app.use(bodyParser.json());

export default app;
