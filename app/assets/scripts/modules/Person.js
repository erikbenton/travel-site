class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}
	
	greet() {
		console.log("Hi there, my name " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}


export default Person;