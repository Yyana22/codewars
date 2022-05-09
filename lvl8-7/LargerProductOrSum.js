function sumOrProduct(array, n) {
	let sum = 0;
	let composition = 1;
	let arrUp = [];
	for (let j = 0; j < array.length; j++) {
		for (let i = 0; i < array.length; i++) {
			if (array[j] > array[i]) {
				[array[j], array[i]] = [array[i], array[j]];
			}
		}
	}

	for (let i = 0; i < n; i++) {
		sum = sum + array[i];
		composition = composition * array[array.length - 1 - i];
	}
	if (sum > composition) {
		return "sum"
	} else if (sum < composition) {
		return "product"
	} else if (sum = composition) {
		return "same"
	}
}