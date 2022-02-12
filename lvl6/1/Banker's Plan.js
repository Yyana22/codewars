function fortune(f0, p, c0, n, k) {
	let m = [];
	let c = [];
	c[0] = c0;
	let f = [];
	f[0] = f0;
	for (let i = 0; i < n; i++) {
		c[i + 1] = Math.floor(c[i] + c[i] * k / 100);
	}
	for (let j = 0; j < n; j++) {
		f[j + 1] = f[j] + p / 100 * f[j] - c[j];
		m[j] = Math.floor(f[j + 1]);
	}

	console.log(m);
	console.log(c);
	if (m[0] < m[n - 1]) {
		return true;
	} else {
		return false;
	}
}


fortune(100000, 1, 2000, 15, 1);



// 1 ошибка
function fortune(f0, p, c0, n, k) {
	let m = [];
	let c = [];
	c[0] = c0;
	let f = [];
	f[0] = f0;
	for (let i = 0; i < n; i++) {
		c[i + 1] = Math.floor(c[i] + c[i] * k / 100);
	}
	for (let j = 0; j < n; j++) {
		f[j + 1] = f[j] + p / 100 * f[j] - c[j];
		m[j] = Math.floor(f[j + 1]);
	}

	//   console.log(m);
	//   console.log(c);
	//   if (n == 1) {
	//     return false
	//   } else 

	if (m[n - 1] + c[n - 1] > 0) {
		return true;
	} else {
		return false;
	}
}