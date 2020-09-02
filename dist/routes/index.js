"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
var router = express_1.default.Router();
/* GET home page. */
router.get("/", async function (req, res, next) {
    console.log("something happens");
    const user = await models_1.findUser("mitia2022@gmail.com");
    res.json({ ok: user });
});
exports.default = router;
//# sourceMappingURL=index.js.map