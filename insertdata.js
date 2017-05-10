'use strict';

var _mongoose = require('mongoose');

var _config = require('../src/shared/config');

_mongoose.mongoose.connect('mongodb://localhost/test');
var CourseSchema = _mongoose.mongoose.Schema({
  name: String,
  shortDes: String,
  longDes: String,
  imgURL: String,
  projectURLs: [String],
  skills: [{ name: String, imgURL: String }],
  instructors: [String]
});
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
// CourseSchema.methods.speak = () => {
//   let greeting = this.name
//     ? 'Meow name is ' + this.name
//     : "I don't have a name"
//   console.log(greeting)
// }

var Course = _mongoose.mongoose.model('Courses', CourseSchema);

var PythonXMine = new Course({
  name: 'Python x Minecraft',
  shortDes: "Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.",
  longDes: '\n  Python can be easy to pick up whether you\'re a first time programmer or you\'re experienced with other languages. The following pages are a useful first step to get on your way writing programs with Python!\n  The community hosts conferences and meetups, collaborates on code, and much more. Python\'s documentation will help you along the way, and the mailing lists will keep you in touch.\n  ',
  imgURL: _config.STATIC_PATH + "PythonXMine.png",
  projectURLs: [""],
  skills: [{ name: "Python", imgURL: "Python.png" }],
  instructors: ["Sanjar", "Maksat"]

});

PythonXMine.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});
