/// <reference path="fourslash.ts" />

// @BaselineFile: getEmitOutputWithDeclarationFile2.baseline

// @Filename: decl.d.ts
// @emitThisFile: true
//// interface I { a: string; }

// @Filename: inputFile2.ts
// @emitThisFile: true
//// export class Foo { }

// @Filename: inputFile3.ts
// @emitThisFile: true
//// var x:string = "hello";

debugger;
verify.baselineGetEmitOutput();