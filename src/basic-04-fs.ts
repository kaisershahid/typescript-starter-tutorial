// run with: ts-node src/basic-04-fs.ts
// read/write files (and also write basic functions)
import fs from "fs";

// first -- there are always 2 special variables in each file: __dirname, __filename
console.log({ __dirname, __filename });

// check that a file exists. in this case, it must (because it's this file)
if (!fs.existsSync(__filename)) {
	throw new Error("should never happen!");
}

// read contents of file -- fine to do with modest file sizes
console.log({ csv: fs.readFileSync(`${__dirname}/../sample.csv`).toString() });

// notice that these functions have 'Sync' in the name -- always use these. the other version uses non-synchronous code and requires a different type of handling

/*
now, let's make a function to read a csv file and return a basic object with headers and multiple rows of data

FUNCTION DECLARATIONS

there are a few ways to define functions in js. a common way is:

export const functionName = (...args: any[]): any => {
  // function body
}

an anonymous function is just what it sounds like -- it's a function with no name:

(...args: any[]): any => {
  // function body
}

anonymous functions are a core part of js -- they essentially let you write hooks that other code execute.
for instance, every array has a `map` function -- it takes an anonymous function as an argument. the function
then goes overy every element of the array and gives that element as an input to the function you gave. your
function would then process the element in some way and return a potentiialy new value
*/

const sampleaArr = ["1", "2", "3"];
console.log({ sampleaArr });

// let's make a new array with each element ending in a '!'
const newSampleArr = sampleaArr.map((e) => e + "!");
console.log({ newSampleArr });

export const loadCsv = (
	path: string
): { headers: string[]; rows: string[][] } => {
	const headers: string[] = [];
	const rows: string[][] = [];

	// 1. read csv
	// 2. split it into lines
	// 3. split each line into columns
	// 4. take first row as headers
	// 5. take remaining rows as rows

	// 1
	const csv = fs.readFileSync(path).toString();
	// 2 -- the split value in this case a regular expression pattern splitting any combo of CR and LF
	const lines = csv.split(/[\r\n]+/);
	// 3 -- an array's map function converts the array from one type into another
	// we're going from a string to string[]
	const rowsCols = lines.map((line) => line.split(","));

	// 4 -- iterate over each row1 element and add to headers
	// shift() and pop() can return undefined -- we assume this won't be the case, so we explicitly state we're expecting a string array
	const row1 = rowsCols.shift() as string[];
	for (const col of row1) {
		headers.push(col);
	}

	// 5
	for (const row of rowsCols) {
		rows.push(row);
	}

	return {
		headers,
		rows,
	};
};

console.log("reading csv", loadCsv(`${__dirname}/../sample.csv`));
