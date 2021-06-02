// run with: ts-node src/basic-01-vars-types.ts
/* <- starts a multiline comment
ends a multiline comment -> */

// OBJECTS: first let's talk about objects. everything in javascript is an object.
// objects are defined as key-value pairs enclosed in {}:
const obj1 = {
	name: "object1",
	isObject: true,
	order: 1,
};

// console.log outputs data to STDOUT. it can take 1 or more arguments
console.log({ obj1 });
console.log("name", obj1.name);

// you can access object properties either as
obj1["name"];
// or
obj1.name;

// the object[key] form allows you to use variables as keys,
// while the object.key form assumes you know the structure of the object
// this is worth knowing because it's a standard notation you'll be encountering

// VARIABLES: variables are declared with either `let` or `const`:
let v1 = 1; // changeable to another number
const v2 = 2; // fixed at 2 (constant)

console.log({ v1, v2 });

// v2 cannot be redefined -- it's permanently 2. v1, however, can be redefined
v1 = 3;
console.log({ v1 });

/*
be aware that this is typescript -- it's a version of javascript that lets you 
specify datatypes. the current settings don't require you to specify them, but if 
you give an initial value, that type can't change. for instance, this works:
*/

let anyVal; // has an implicity `any` type, so literally any value can be assigned
console.log("a (1)", anyVal);
anyVal = 1; // type is still `any`
console.log("a (2)", anyVal);
anyVal = ""; // type is still `any`
console.log("a (3)", anyVal);

// this, however, would generate an error (uncomment to see)
// const b = 1;
// b = "two";

// # SPECIFYING TYPES
// variables can speficy their types in the format: `let var: type`

let str1: string;
str1 = "string";
// would produce error
// str1 = 1;

// other basic types:
let num1: number = 1;
let bool1: boolean = true;
let numArr: number[] = [1, 2];
let strArr: string[] = ["a", "b"];
console.log({ num1, bool1, numArr, strArr });

// variables can have multiple types by using the | operator:
let anyScalar: string | number | boolean = 5;
console.log({ anyScalar });
anyScalar = "str";
console.log({ anyScalar });

// if a variable should be a specific type or unknown, you can do:
let someStr: undefined | string;
if (someStr === undefined) {
	console.log("someStr is undefined");
}
