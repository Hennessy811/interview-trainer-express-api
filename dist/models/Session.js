"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinSession = exports.getSession = exports.createSession = exports.Session = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_1 = require("./User");
const Scene_1 = require("./Scene");
class Session {
}
__decorate([
    typegoose_1.prop({ ref: Scene_1.Scene }),
    __metadata("design:type", Object)
], Session.prototype, "scene", void 0);
__decorate([
    typegoose_1.prop({ ref: User_1.User }),
    __metadata("design:type", Object)
], Session.prototype, "interviewer", void 0);
__decorate([
    typegoose_1.prop({ ref: User_1.User }),
    __metadata("design:type", Object)
], Session.prototype, "candidate", void 0);
exports.Session = Session;
const SessionModel = typegoose_1.getModelForClass(Session, {
    schemaOptions: { timestamps: true },
});
// interviewerId, scenarioId
async function createSession(interviewerId, scenarioId) {
    const session = await SessionModel.create({
        interviewer: interviewerId,
        scene: scenarioId,
    });
    return session;
}
exports.createSession = createSession;
async function getSession(id) {
    const session = await SessionModel.findById(id);
    return session;
}
exports.getSession = getSession;
async function joinSession(sessionId, userId, role) {
    let scene;
    if (role === "candidate") {
        scene = await SessionModel.findOneAndUpdate({ _id: sessionId }, { candidate: userId });
    }
    else {
        scene = await SessionModel.findOneAndUpdate({ _id: sessionId }, { interviewer: userId });
    }
    return scene;
}
exports.joinSession = joinSession;
//# sourceMappingURL=Session.js.map