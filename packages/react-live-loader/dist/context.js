"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveProvider = exports.LiveContext = void 0;
var react_1 = __importDefault(require("react"));
exports.LiveContext = react_1.default.createContext({ code: '' });
var LiveProvider = function (props) {
    return react_1.default.createElement(exports.LiveContext.Provider, { value: { code: props.code } }, props.children);
};
exports.LiveProvider = LiveProvider;
