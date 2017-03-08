function superSum(array) {
	var ans = 0; 
	var sum= array.map(function(a){
		return Array.prototype.slice.call(a.toString()).map(Number).reduce(function (b,c){
			return b+c;
		});
	});
	for (i=0;i<sum.length;i++){
		ans= ans + sum[i];
	}
	return ans;
}