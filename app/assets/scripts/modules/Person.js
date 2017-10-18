function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello, my name " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}


module.exports = Person;