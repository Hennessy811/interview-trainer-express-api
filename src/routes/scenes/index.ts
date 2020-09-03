import express from "express";
var router = express.Router();

import { createScenario, listScenarios, getScenario } from "../../models";
import { createSession, joinSession, getSession } from "../../models/Session";

router.get("/", function (req, res, next) {
  listScenarios().then((r) => {
    res.json(r);
  });
  //   res.json({ ok: "respond with a resource" });
});

router.post("/add", function (req, res, next) {
  const json = req.body;
  if (json) {
    createScenario(json)
      .then((r) => {
        res.status(200).json({ ok: r });
      })
      .catch((e) => res.status(500).json({ error: e }));
  } else {
    res.send("respond with a resource");
  }
});

router.post("/start", function (req, res, next) {
  const json = req.body;
  if (json) {
    createSession(json.userId, json.scenarioId)
      .then((r) => {
        res.status(200).json(r);
      })
      .catch((e) => res.status(500).json({ error: e }));
  } else {
    res.send("respond with a resource");
  }
});

router.post("/join", async function (req, res, next) {
  const json = req.body;
  const isInterviewer =
    (await (await getSession(json.sessionId)).interviewer) === json.userId;

  joinSession(
    json.sessionId,
    json.userId,
    isInterviewer ? "interviewer" : "candidate"
  ).then((r) => {
    res.status(200).json(r);
  });

  // if (json) {
  //     .catch((e) => res.status(500).json({ error: e }));
  // } else {
  //   res.send("respond with a resource");
  // }
});

router.get("/:id", function (req, res, next) {
  getScenario(req.params.id)
    .then((r) => {
      res.json(r);
    })
    .catch(() => {
      res.status(500).json({ error: "error" });
    });
});

export default router;
