function generateShape(integer) {
	let arr = [];
	let str = [];
	for (let i = 0; i < integer; i++) {
		for (let j = 0; j < integer; j++) {
			str.push('+');
		}
		arr = str.join('');
		str.push('\n');
	}
	return arr;
}