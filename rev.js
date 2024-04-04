//Write a java script program to create a class called "person" with properties name, age and county .Include a method to desplay
//the persons details.create two instances of 'person' class and display their details.
class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;

    }
    displayDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Age; ${this.age}`);
        console.log(`country: ${this.country}`);
    }
}
const person1 = new Person('Maureen', 50, 'Kenya');
person1.displayDetails();

//Write a javascript program to create a class called 'rectangle' with properties for width and height.Include two methods to calculate rectangle area and perimeeter 
//create an instance of the 'rectangle,class and calculate its area and perimeter

class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
    calculateArea() {
        return this.width*this.height;

    }
   

}
const rectangle = new Rectangle(10,19);
const area = rectangle.calculateArea();
console.log(`Rectangle area:${area}`);