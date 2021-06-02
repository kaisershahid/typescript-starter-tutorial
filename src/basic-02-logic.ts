// run with: ts-node src/basic-02-logic.ts
/*
CONDITIONAL OPERATORS

- and: `&&`
- or: `||`
- equal: `==`
- not equal: `!=`
- less than: `<`
- less than or equal: `<=`
- greater than: `>`
- greather than or equal: `>=`

conditional expressions can be written as `var1 || var2` or grouped with parenthesis 
to form more complex logic like `(a || b) && c && (d < 5 || e > 99)`
*/

const boolA: boolean = false;
const boolB: boolean = true;
const boolC: boolean = true;

// EQUAL
if (boolB == boolC) {
	console.log("b == c");
} else {
	console.log("NOT b == c");
}

// OR
if (boolA || boolC) {
	console.log("a || c");
} else {
	console.log("NOT a || c");
}

// AND
if (boolA && boolB) {
	console.log("a && b");
} else {
	console.log("NOT a && b");
}

// COMPOUND CONDITIONALS -- use parenthesis to group related expressions together
if ((boolA || boolB) && boolC) {
	console.log("(a || b) && c");
} else {
	console.log("NOT (a || b) && c");
}

// @ts-ignore
if (boolA != boolB) {
	console.log("a != b");
} else {
	console.log("NOT a != b");
}

// NOT on a compound  condition
if (!(boolA && boolB)) {
	console.log("!(a && b)");
} else {
	console.log("NOT !(a && b)");
}

// if/else
if (boolA) {
	console.log("a");
} else if (boolB || boolC) {
	console.log("b || c");
} else {
	// default condition
	console.log("default");
}

// switch (same as if/elseif/else, except you can only compare against a single value)
switch (boolA) {
	// @ts-ignore
	case true:
		console.log("switch: a is true");
		break;
	case false:
		console.log("switch: a is false");
		break;
}
