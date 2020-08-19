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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickStart = void 0;
var edge = __importStar(require("electron-edge-js"));
var path = __importStar(require("path"));
var QuickStart = /** @class */ (function () {
    function QuickStart(dirName) {
        this.getAppDomainDirectory = edge.func({
            assemblyFile: this.baseDll,
            typeName: this.localTypeName,
            methodName: "GetAppDomainDirectory",
        });
        this.getCurrentTime = edge.func({
            assemblyFile: this.baseDll,
            typeName: this.localTypeName,
            methodName: "GetCurrentTime",
        });
        this.useDynamicInput = edge.func({
            assemblyFile: this.baseDll,
            typeName: this.localTypeName,
            methodName: "UseDynamicInput",
        });
        this.getPerson = edge.func({
            assemblyFile: this.baseDll,
            typeName: this.externalTypeName,
            methodName: "GetPersonInfo",
        });
        this.getRuntime = edge.func({
            assemblyFile: this.baseDll,
            typeName: this.localTypeName,
            methodName: "GetCurrentRuntime",
        });
        var namespace = "QuickStart.Core";
        var version = "coreapp";
        var baseNetAppPath = path.join(dirName, "/c-sharp/" + namespace + "/bin/Debug/net" + version + "3.1");
        this.baseDll = path.join(baseNetAppPath, namespace + ".dll");
        this.localTypeName = namespace + ".LocalMethods";
        this.externalTypeName = namespace + ".ExternalMethods";
    }
    return QuickStart;
}());
exports.QuickStart = QuickStart;
//# sourceMappingURL=QuickStart.cs.js.map