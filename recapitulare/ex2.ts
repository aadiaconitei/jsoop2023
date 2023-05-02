// Metoda 1
function unionOfArrays<T1, T2>(arr1: T1[], arr2: T2[]):(T1|T2)[] {
    const arr3 = [ ...new Set([...arr1, ...arr2])]
    return arr3;
  }

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);


// Metoda 2
function unionOfArrays2<T1, T2>(arr1: T1[], arr2: T2[]):(T1|T2)[] {
	const newArr: (T1 | T2)[] = [];
	const tempObj: { [key: string]: boolean } = {};
	const newTempArr: (T1 | T2)[] = [...arr1, ...arr2];
	let i: number;
	let tempString: string;
	for (i = 0; i < newTempArr.length; i++) {
		tempString = JSON.stringify(newTempArr[i]);
		if (!tempObj[tempString]) {
			newArr.push(newTempArr[i]);
			tempObj[tempString] = true;
		}
	}
	return newArr;
};