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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongodb_service_1 = require("../mongodb/mongodb.service");
let DatabasesController = class DatabasesController {
    getDatabases() {
        return this.mongodbService.findAllDatabase();
    }
    createDatabase(body) {
        const database = {};
        database.name = body;
        return this.mongodbService.createDatabase(database);
    }
    deleteDatabase() {
        return this.mongodbService.deleteAllDatabase();
    }
};
__decorate([
    common_1.Inject(),
    __metadata("design:type", mongodb_service_1.MongodbService)
], DatabasesController.prototype, "mongodbService", void 0);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DatabasesController.prototype, "getDatabases", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DatabasesController.prototype, "createDatabase", null);
__decorate([
    common_1.Delete(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatabasesController.prototype, "deleteDatabase", null);
DatabasesController = __decorate([
    common_1.Controller('databases')
], DatabasesController);
exports.DatabasesController = DatabasesController;
//# sourceMappingURL=databases.controller.js.map