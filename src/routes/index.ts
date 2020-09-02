import express from "express";
import { findUser } from "../models";

var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  console.log("something happens");

  const user = await findUser("mitia2022@gmail.com");
  res.json({ ok: user });
});

export default router;
