"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileComponent = void 0;
var standalone_1 = require("@babel/standalone");
var EnvPreset = require('@babel/preset-env');
var ReactPreset = require('@babel/preset-react');
var TypescriptPreset = require('@babel/preset-typescript');
var compileComponent = function (code) {
    var _a;
    console.log("Compiling..");
    var result = standalone_1.transform(code, {
        filename: 'component.tsx',
        presets: [
            [EnvPreset, {
                    modules: 'cjs'
                }],
            ReactPreset,
            TypescriptPreset
        ]
    });
    return (_a = result.code) === null || _a === void 0 ? void 0 : _a.toString();
};
exports.compileComponent = compileComponent;
