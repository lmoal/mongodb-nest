"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let MongodbService = class MongodbService {
    constructor() {
        this.databases = [];
    }
    createDatabase(database) {
        this.databases.push(database);
    }
    findAllDatabase() {
        return this.databases;
    }
    deleteAllDatabase() {
        this.databases = [];
    }
    createCollection(collection) {
        this.databases.push(collection);
    }
    findAllCollection(databaseName) {
        var jp = require('jsonpath');
        return jp.query(this.databases, '$..' + databaseName);
    }
    deleteAllCollection() {
        this.databases = [];
    }
};
MongodbService = __decorate([
    common_1.Injectable()
], MongodbService);
exports.MongodbService = MongodbService;
//# sourceMappingURL=mongodb.service.js.map