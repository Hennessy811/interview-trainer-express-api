import express from "express";
var router = express.Router();

import { createScenario, listScenarios, getScenario } from "../../models";

router.get("/", function (req, res, next) {
  listScenarios().then((r) => {
    console.log(r);
    res.json(r);
  });
  //   res.json({ ok: "respond with a resource" });
});

router.post("/add", function (req, res, next) {
  const json = req.body;
  if (json) {
    createScenario(json)
      .then((r) => {
        console.log(r);
        res.status(200).json({ ok: r });
      })
      .catch((e) => res.status(500).json({ error: e }));
  } else {
    res.send("respond with a resource");
  }
});

router.get("/:id", function (req, res, next) {
  console.log(req);

  getScenario(req.params.id).then((r) => {
    console.log(r);
    res.json(r);
  });
  //   res.json({ ok: "respond with a resource" });
});

export default router;
