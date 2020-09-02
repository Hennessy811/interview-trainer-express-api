import express from "express";
import { findUser, listUsers } from "../models";

var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  console.log("something happens");

  const user = await listUsers();
  res.json({ ok: user });
});

export default router;
