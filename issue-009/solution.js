// implement your solution here
function sumEven(a) {
	return a.filter(function(i){
		if(i%2==0)
			return i}).reduce(function(a,b){
		return a+b});
}