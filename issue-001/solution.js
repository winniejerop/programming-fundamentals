function dataTypeCheck(a) {
    	
	if(typeof a =='number'){
		if(a%1!=0){
			return a*2;
		} 
		else{
			return a/2;
		}
	}
	else if(typeof a=='string'){
		var val = Number(a);
		if (parseInt(val)){
		    return Number('a');}
	else if (typeof a=='string'){
			return 'hello ' + a;
		}
	else if(typeof a==null){
		return 0;
	}
	else if(typeof a ==undefined){
		return false;
	}
	else if(typeof a==NaN){
		return 0;
	}
	
 }
}