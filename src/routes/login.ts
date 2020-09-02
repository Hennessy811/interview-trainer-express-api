import express from "express";
import { User, findUser } from "../models";
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ ok: "respond with a resource" });
});

router.post("/", function (req, res, next) {
  const json = req.body;
  if (json) {
    findUser(json.email, json)
      .then((r) => {
        console.log(r);
        res.status(200).json({ ok: "saved" });
      })
      .catch((e) => res.status(500).json({ error: e }));
  } else {
    res.send("respond with a resource");
  }
});

export default router;
