var $ = require("jquery");
var Person = require("./modules/Person");


var john = new Person("John Doe", "green");
john.greet();

var jane = new Person("Jane Smith", "blue");
jane.greet();