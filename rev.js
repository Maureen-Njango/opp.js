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





///write a  program that creates a class 'book' with properties for title ,author and publication year .
///Include a function to display book .
class Book{
    constructor(title,author,publicationyear) {
        this.title = title;
        this.author = author;
        this.publicationyear = publicationyear;

    }
    displayDetails(){
        console.log(`The ${this.title}  is written by ${this.author} in ${this.publicationyear}`)
    }

    

}
const book1 = new Book ("stupid goat", "maureen", 1998)
book1.displayDetails()

//Write a program that creates a class car with properties make,model, and year .Include a function to display car information
class Car{
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`This car ${this.make} is from the ${this.model} created ${this.year}`)
    }

}
const Car1 = new Car ("audi", "german machine", 2015)
Car1.displayDetails()

//write a program that creates a class student with properties for name , age and age.Include a function to display students information
class student{
    constructor(name, age,grade){
        this.name = name;
        this.age = age;
        this.grade = grade;

    }
    displayDetails() {
        console.log(`The students name is ${this.name} who is aged ${this.age}. She scored a ${this.grade} in her main exam`)

    }

}
const student1 = new student ("maureen", 23, "A")
student1.displayDetails()
