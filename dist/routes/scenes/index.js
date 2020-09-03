"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const models_1 = require("../../models");
const Session_1 = require("../../models/Session");
router.get("/", function (req, res, next) {
    models_1.listScenarios().then((r) => {
        res.json(r);
    });
    //   res.json({ ok: "respond with a resource" });
});
router.post("/add", function (req, res, next) {
    const json = req.body;
    if (json) {
        models_1.createScenario(json)
            .then((r) => {
            res.status(200).json({ ok: r });
        })
            .catch((e) => res.status(500).json({ error: e }));
    }
    else {
        res.send("respond with a resource");
    }
});
router.post("/start", function (req, res, next) {
    const json = req.body;
    if (json) {
        Session_1.createSession(json.userId, json.scenarioId)
            .then((r) => {
            res.status(200).json(r);
        })
            .catch((e) => res.status(500).json({ error: e }));
    }
    else {
        res.send("respond with a resource");
    }
});
router.post("/join", async function (req, res, next) {
    const json = req.body;
    const isInterviewer = (await (await Session_1.getSession(json.sessionId)).interviewer) === json.userId;
    Session_1.joinSession(json.sessionId, json.userId, isInterviewer ? "interviewer" : "candidate").then((r) => {
        res.status(200).json(r);
    });
    // if (json) {
    //     .catch((e) => res.status(500).json({ error: e }));
    // } else {
    //   res.send("respond with a resource");
    // }
});
router.get("/:id", function (req, res, next) {
    models_1.getScenario(req.params.id)
        .then((r) => {
        res.json(r);
    })
        .catch(() => {
        res.status(500).json({ error: "error" });
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map