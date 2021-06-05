"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteComponent = void 0;
var react_1 = __importStar(require("react"));
var react_live_loader_1 = require("react-live-loader");
var RemoteComponent = function (props) {
    var _a = react_1.useState(), url = _a[0], setUrl = _a[1];
    var _b = react_1.useState(), Component = _b[0], setComponent = _b[1];
    react_1.useEffect(function () {
        if (props.url && props.url != url) {
            react_live_loader_1.remoteToComponent(props.url).then(function (component) {
                setComponent(component);
                setUrl(props.url);
            });
        }
    }, [props.url]);
    return Component ? Component(props.props) : react_1.default.createElement("div", null);
};
exports.RemoteComponent = RemoteComponent;
