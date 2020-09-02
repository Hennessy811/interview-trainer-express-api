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
exports.findUser = exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class User {
}
__decorate([
    typegoose_1.prop({ required: true, index: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "picture", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "familyName", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "givenName", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "imageUrl", void 0);
__decorate([
    typegoose_1.prop({ required: true, default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isAdmin", void 0);
exports.User = User;
// Get User model
const UserModel = typegoose_1.getModelForClass(User, {
    schemaOptions: { timestamps: true },
});
// Get or create user
async function findUser(email) {
    console.log("finduser called");
    let user = await UserModel.findOne({ email });
    if (!user) {
        try {
            user = await UserModel.create({ email });
        }
        catch (err) {
            user = await UserModel.findOne({ email });
        }
    }
    return user;
}
exports.findUser = findUser;
//# sourceMappingURL=User.js.map