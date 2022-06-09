"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const Posts_entity_1 = require("./entities/Posts.entity");
const User_entity_1 = require("./entities/User.entity");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+d\+\.[tj]s$/,
    },
    entities: [Posts_entity_1.Post, User_entity_1.User],
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map