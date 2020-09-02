"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
var router = express_1.default.Router();
router.get("/", function (req, res, next) {
    res.json({ ok: "respond with a resource" });
});
router.post("/", function (req, res, next) {
    const json = req.body;
    if (json) {
        models_1.findUser(json.email, json)
            .then((r) => {
            console.log(r);
            res.status(200).json({ ok: "saved" });
        })
            .catch((e) => res.status(500).json({ error: e }));
    }
    else {
        res.send("respond with a resource");
    }
});
exports.default = router;
//# sourceMappingURL=login.js.map