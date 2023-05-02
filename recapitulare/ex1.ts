function fibonacciValue (nr: number): number {
    if (nr < 2) {
        return 1;
    }
    let prev: number = 0;
	let current: number = 1;
	// let temp: number = 1;
	let i: number;
	for (i = 2; i <= nr; i++) {
		// temp = prev + current;
		// prev = current;
		// current = temp;

		[prev, current] = [current, prev + current];
	}
	return current;
};
console.log(fibonacciValue(9));