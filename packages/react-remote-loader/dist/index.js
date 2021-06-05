"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteComponent = void 0;
var react_1 = require("react");
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
    return Component && Component(props.props);
};
exports.RemoteComponent = RemoteComponent;
