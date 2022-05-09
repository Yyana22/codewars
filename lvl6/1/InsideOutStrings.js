function insideOut(x) {
	let a = x.split(' ');
	let b = [];
	for (let i = 0; i < a.length; i++) {
		b[i] = a[i].split('');
	}
	for (let i = 0; i < a.length; i++) {
		let count = 0;
		let mid = b[i].length / 2;
		for (let j = 0; j < b[i].length; j++) {
			if (b[i].length % 2 == 0) {
				if (j < mid) {
					[b[i][mid - 1 - j], b[i][j]] = [b[i][j], b[i][mid - 1 - j]];
				} else {
					[b[i][mid + count], b[i][b[i].length - 1]] = [b[i][b[i].length - 1], b[i][mid + count]];
					count++;
				}
			}
		}
	}

	console.log(b);
}
insideOut('man i need a taxi up to ubud');

///

function insideOut(x) {
	let a = x.split(' ');
	let b = [];
	for (let i = 0; i < a.length; i++) {
		b[i] = a[i].split('');
	}
	for (let i = 0; i < a.length; i++) {
		let count = 0;
		let mid = b[i].length / 2;
		for (let j = 0; j < b[i].length; j++) {
			if (b[i].length % 2 == 0) {
				if (j < mid) {
					[b[i][mid - 1 - j], b[i][j]] = [b[i][j], b[i][mid - 1 - j]];
				} else {
					[b[i][mid + count], b[i][b[i].length - 1]] = [b[i][b[i].length - 1], b[i][mid + count]];
					count++;
				}
			}
		}
	}
	console.log(a);
	console.log(b);
}
insideOut('man i need a taxi up to ubud');
