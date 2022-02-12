function olympicRing(a) {
	let arr = a.split('');
	var k = 0;
	const letters = {
		A: 1,
		a: 1,
		B: 2,
		b: 1,
		D: 1,
		d: 1,
		e: 1,
		g: 1,
		O: 1,
		o: 1,
		P: 1,
		p: 1,
		Q: 1,
		q: 1,
		R: 1,
	}

	for (let i = 0; i < arr.length; i++) {
		for (let key in letters) {
			if (key === arr[i]) {
				k = k + letters[key];
			}
		}
	}
	k = Math.floor(k / 2);
	if (k <= 1) {
		return 'Not even a medal!';
	} else if (k == 2) {
		return 'Bronze!';
	} else if (k == 3) {
		return 'Silver!';
	} else if (k > 3) {
		return 'Gold!';
	}
}

olympicRing('wHjMudLwtoPGocnJ');