import express from "express";
import { getSession } from "../../models/Session";
import { getUser } from "../../models";
var router = express.Router();

router.get("/:id", async function (req, res, next) {
  const session = await getSession(req.params.id);

  const response = {
    interviewer: null,
    candidate: null,
  };

  const interviewer = session.interviewer;
  const candidate = session.candidate;

  if (interviewer) {
    response.interviewer = await getUser(interviewer);
  }
  if (candidate) {
    response.interviewer = await getUser(candidate);
  }

  res.json(response);
});

export default router;
