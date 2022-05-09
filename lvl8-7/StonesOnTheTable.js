function solve(stones) {
	let k = 0;
	let letters = stones.split('');
	for (let i = 0; i < letters.length; i++) {
		if (letters[i] === letters[i + 1]) {
			k++;
		}
	}
	return k;
}

solve("RRGGBB");