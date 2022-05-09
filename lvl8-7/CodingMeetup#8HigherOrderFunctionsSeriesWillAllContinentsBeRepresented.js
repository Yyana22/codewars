var list1 = [
	{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
	{ firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
	{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
	{ firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
	{ firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

var list2 = [
	{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];

let k = 0;
function pred(item1) {
	let location = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	for (let i = 0; i < location.length; i++) {
		if (item1.continent === location[i] && item1.language === "PHP") {
			k++;
		}
	}
}
let result = list1.find(pred);

if (k > 0) {
	console.log(true);
} else {
	console.log(false);
}


// рабочий вариант 
function allContinents(list) {
	let allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	let currentContinents = new Set();

	list.map(elem => currentContinents.add(elem.continent));

	return allContinents.length === currentContinents.size;
}
