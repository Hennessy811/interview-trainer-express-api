"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Session_1 = require("../../models/Session");
const models_1 = require("../../models");
var router = express_1.default.Router();
router.get("/:id", async function (req, res, next) {
    const session = await Session_1.getSession(req.params.id);
    const response = {
        interviewer: null,
        candidate: null,
    };
    const interviewer = session.interviewer;
    const candidate = session.candidate;
    if (interviewer) {
        response.interviewer = await models_1.getUser(interviewer);
    }
    if (candidate) {
        response.interviewer = await models_1.getUser(candidate);
    }
    res.json(response);
});
exports.default = router;
//# sourceMappingURL=index.js.map