"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveComponent = void 0;
var react_1 = require("react");
var _1 = require(".");
var LiveComponent = function (props) {
    var _a = react_1.useState(), Component = _a[0], setComponent = _a[1];
    react_1.useEffect(function () {
        if (props.code) {
            var component = _1.rawToComponent(props.code);
            setComponent(component);
        }
    }, [props.code]);
    return Component(props.props);
};
exports.LiveComponent = LiveComponent;
