"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequires = void 0;
var sanitizeDependencies = function (dependencies) {
    return typeof dependencies === "function" ? dependencies() : dependencies || {};
};
var createRequires = function (dependencies) {
    var isSanitized = false;
    var deps = {};
    return function (name) {
        if (!isSanitized) {
            // note: needs to happen inside the inner function for the laziness to work.
            deps = sanitizeDependencies(dependencies);
            isSanitized = true;
        }
        if (!(name in deps)) {
            throw new Error("Could not require '" + name + "'. '" + name + "' does not exist in dependencies.");
        }
        return deps[name];
    };
};
exports.createRequires = createRequires;
