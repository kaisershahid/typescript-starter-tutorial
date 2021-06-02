// run with: ts-node src/basic-03-strings-arrays.ts

// include code from other files/libraries with import/from. syntaxes are:
// import {varName1, varName2, ...} from './file' -- for files relative to this file -- you can omit extension
// import {varName1, varName2, ...} from 'library' -- libraries installed through package manager -- notice there is no './' or any other directory prefixing at the start
import { FILENAME } from "./basic-export";
console.log(__filename, { FILENAME });

// ## STRINGS

// strings are delimited by ', ", and `.
const singleQuote = "single";
const doubleQuote = "double";
const doubleQuoteWithEscape = 'double "quote"';
const backtick = `you can embed variables this way, like ${singleQuote}`;

console.log({ singleQuote, doubleQuote, doubleQuoteWithEscape, backtick });

// let's take a line of CSV and process it
const line = "a,b,,d,e,f,g,h,i,j";

// split by comma -- this gives us an array. in this statement, the `columns` var
// is explicitly declared as a string array `string[]`
const columns: string[] = line.split(",");
console.log({ columns });

//  get first 3 elements using Array.slice(start, end)
// NOTE: arrays are 0-indexed in js (first item is 0, second item is 1, etc)
console.log({ first3: columns.slice(0, 3) });

// get last 3 elements using a negative start
console.log({ last3: columns.slice(-3) });

// length of array
console.log("columns length", { length: columns.length });

// 2nd element
console.log("get 2nd element", { element2: columns[1] });

// remove last item
const lastItem = columns.pop();
console.log("removeLastItem", { columns, lastItem, length: columns.length });

// add new item at end
columns.push("newItemAtEnd");
console.log("addLastItem", { columns, length: columns.length });

// remove first item
const firstItem = columns.shift();
console.log("removeFirstItem", { columns, firstItem, length: columns.length });

// add new first item
columns.unshift("newItemAtstart");
console.log("addFirstItem", { columns, length: columns.length });

// you can do arrays of arrays, like a matrix. the notation is [x][y] (mathematical matrix notation uses [y][x])
const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log({ matrix });
console.log({ "0,0": matrix[0][0], "1,1": matrix[1][1], "2,2": matrix[2][2] });
