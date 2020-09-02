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
exports.listScenarios = exports.createScenario = exports.Scenario = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class Question {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Question.prototype, "title", void 0);
__decorate([
    typegoose_1.prop({ default: "text" }),
    __metadata("design:type", String)
], Question.prototype, "type", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Question.prototype, "correctAnswer", void 0);
class Section {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Section.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Section.prototype, "questions", void 0);
class Settings {
}
__decorate([
    typegoose_1.prop({ default: false }),
    __metadata("design:type", Boolean)
], Settings.prototype, "public", void 0);
__decorate([
    typegoose_1.prop({ default: true }),
    __metadata("design:type", Boolean)
], Settings.prototype, "shareQuestions", void 0);
class Scenario {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Scenario.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Object)
], Scenario.prototype, "tags", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Object)
], Scenario.prototype, "sections", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Settings)
], Scenario.prototype, "settings", void 0);
exports.Scenario = Scenario;
// Get User model
const ScenarioModel = typegoose_1.getModelForClass(Scenario, {
    schemaOptions: { timestamps: true },
});
// Get or create user
async function createScenario(scene) {
    console.log({ scene });
    const scenario = await ScenarioModel.create(Object.assign({}, scene));
    return scenario;
}
exports.createScenario = createScenario;
async function listScenarios() {
    let scenes = await ScenarioModel.find();
    return scenes;
}
exports.listScenarios = listScenarios;
//# sourceMappingURL=Scenу.js.map