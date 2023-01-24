function course(title , videos , lengths){
    this.title = title;
    this.videos = videos;
    this.lengths = lengths;
}

var course1 = new course("Essential" , 32, 23);
console.log(course1);
