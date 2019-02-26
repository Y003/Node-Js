let Add = (param1, param2) => Number(param1) + Number(param2);

let Subtract = (param1, param2) => param1 - param2;

let Product = (param1, param2) => param1 * param2;

let Division = (param1, param2) => param1 / param2;

let Modulus = (param1, param2) => param1 % param2;

let Square = (param1) => param1 * param1;

let Cube = (param1) => param1 * param1 * param1;

module.exports = {
	Add,
	Subtract,
	Product,
	Division,
	Modulus,
	Square,
	Cube
}