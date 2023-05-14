"use strict";
// ! module @ scripts (@ means opposite)=> if remain import export is module // not import|export is script > script whose contents are available in the global scope (and therefore to modules as well).
//! name alias  => ec> es6> common js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Jekono from "./module";
// import addTwo from './utils/add'
// import multiply from './utils/multiply'
// import average from './utils/average'
const index_1 = __importDefault(require("./utils/index"));
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const res1 = index_1.default.addTwo(4, 6);
const res2 = index_1.default.multiply(4, 6);
const res3 = index_1.default.average(4, 6);
