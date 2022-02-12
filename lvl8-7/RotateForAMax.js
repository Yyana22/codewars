'use strict';
function maxRot(n) {
	let listOfNums = [];
	let array = Array.from(n.toString());
	let num = 0;
	while (num < array.length - 1) {
		let number = array.splice(num, 1);
		array.push(Number(number));
		listOfNums.push(Number(array.join("")));
		num++;
	}
	listOfNums.sort((a, b) => b - a);
	return listOfNums[0];
}
console.log(maxRot(56789));

// вариант 2

function maxRot(n) {
	let max = n;
	let k = 0;
	let array = n.toString().split('');
	for (let i = 0; i < array.length - 2; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			array.unshift(array.pop());
		}
		console.log(array, k);
		k++;
	}
}

maxRot(56789);