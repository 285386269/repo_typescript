import a from "./a";
import b from "./b";

console.log("module a: ", a);
console.log("module b: ", b);

interface WebpackRequire extends NodeRequire {
    ensure(
      dependencies: string[],
      callback: (require: WebpackRequire) => void,
      errorCallback?: (error: Error) => void,
      chunkName?: string
    ): void;
};
const require: WebpackRequire = (window as any).require;

//创建代码分离点
require.ensure(["./c.ts", "./d.ts", "./e.ts"], function() {
    const c = require("./c.ts");
    const d = require("./d.ts");
    const Person = require("./e.ts");
    const person = new Person("ZhangSan", 28);
    console.log("module c: ", c);
    console.log("module d: ", d);
    console.log("person: ", person.toString());
}, undefined, "abc");