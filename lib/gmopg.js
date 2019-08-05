"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const enums = require("./client.enum");
exports.ENUMS = enums;
const memberable_1 = require("./client/memberable");
const cardable_1 = require("./client/cardable");
const tranable_1 = require("./client/tranable");
const cvsTranable_1 = require("./client/cvsTranable");
const multiTranable_1 = require("./client/multiTranable");
const util_1 = require("./util");
const client_1 = require("./client");
exports.default = cardable_1.default(cvsTranable_1.default(memberable_1.default(multiTranable_1.default(tranable_1.default(client_1.default)))));
function GENERATE_MEMBER_ID(key) {
    return util_1.generateID(key).substring(0, 60);
}
exports.GENERATE_MEMBER_ID = GENERATE_MEMBER_ID;
__export(require("./client.enum"));
