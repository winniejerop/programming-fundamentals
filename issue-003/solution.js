    function product(a, b) {
	try {
    if (typeof a == 'number' || typeof b=='number') {
    	return a * b;
    } else{
    	throw new product('NaN Exception');
    }
    	
    }catch(e){
    	return e;
    } 
}

}