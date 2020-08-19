import * as edge from "electron-edge-js";
import * as path from "path";

export class QuickStart {
    baseDll: string;
    localTypeName: string;
    externalTypeName: string;

    constructor(dirName: string) {
        const namespace = "QuickStart.Core";
        const version = "coreapp";
        const baseNetAppPath = path.join(dirName, "/c-sharp/" + namespace + "/bin/Debug/net" + version + "3.1");
        this.baseDll = path.join(baseNetAppPath, namespace + ".dll");
        this.localTypeName = namespace + ".LocalMethods";
        this.externalTypeName = namespace + ".ExternalMethods";
    }

    getAppDomainDirectory = edge.func({
        assemblyFile: this.baseDll,
        typeName: this.localTypeName,
        methodName: "GetAppDomainDirectory",
    });

    getCurrentTime = edge.func({
        assemblyFile: this.baseDll,
        typeName: this.localTypeName,
        methodName: "GetCurrentTime",
    });

    useDynamicInput = edge.func({
        assemblyFile: this.baseDll,
        typeName: this.localTypeName,
        methodName: "UseDynamicInput",
    });

    getPerson = edge.func({
        assemblyFile: this.baseDll,
        typeName: this.externalTypeName,
        methodName: "GetPersonInfo",
    });

    getRuntime = edge.func({
        assemblyFile: this.baseDll,
        typeName: this.localTypeName,
        methodName: "GetCurrentRuntime",
    });
}
