
var course= new Object();
var course = {
    title : "Javascript",
    videos : 32,
    length : "Medium",
    views : 0,
    updateViews : function(){
        return ++course.views;
    }
}
console.log(course);

console.log(course.title);      //Functions also contains method
console.log(course.views);      //Method which updates the views
console.log(course);
