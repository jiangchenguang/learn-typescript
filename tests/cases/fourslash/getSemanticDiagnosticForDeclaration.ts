/// <reference path="fourslash.ts" />

// @declaration: true
//// interface privateInterface {}
//// export class Bar implements /*1*/privateInterface/*2*/{ }

verify.errorExistsBetweenMarkers("1", "2");
verify.numberOfErrorsInCurrentFile(1);


