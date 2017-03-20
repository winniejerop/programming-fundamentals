
function objectValues(o){                                                                                                                                                  var arr=[];
     var array_new=Object.keys(o).sort();                                                                                                                                                                                                                                                               
        for(var k in array_new){ 
          arr.push(o[array_new[k]]);                                                                                                                                                                    }     return arr;                                                       
}

