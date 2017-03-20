function oldAndYoung(students) {
 var elements=students.length;
   var years=[];
    for (var i = 0;i < elements;i++) {
        var student=students[i];
        var yob=student['yearOfBirth'];
        years.push(yob);
    }
    youngest=Math.max.apply(null,years);
    var ii=years.indexOf(youngest)
   young=students[ii]['name'];
    
   oldest=Math.min.apply(null,years);
     var iii=years.indexOf(oldest)
   old=students[iii]['name'];
   return {youngest:young,oldest:old};
   
}