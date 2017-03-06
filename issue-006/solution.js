// implement your solution here
function selectSum(a) {
	var sum = 0;
	for (i = 0; i<a.length;i++){
		if (typeof a[i]=='number'){
			sum = sum + a[i];
		}
	}
    return sum;
}