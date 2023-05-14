"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("./add"));
const substract_1 = __importDefault(require("./substract"));
const multiply_1 = __importDefault(require("./multiply"));
const average_1 = __importDefault(require("./average"));
exports.default = {
    addTwo: add_1.default,
    subtract: substract_1.default,
    multiply: multiply_1.default,
    average: average_1.default,
};
