// JavaScript Document

// Created a class named Person having a constructor
class Person {
	// Constructor of Person class accepting four parameters name, age , gender and interests and setting there value to class variables respectively using this keyword
	// There is no setting of passed name to this constructor so namw will be undefined as there is no name in this class
  constructor(name, age, gender, interests) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

// function greeting for class Person when called will print "Hi! I'm ${this.name}" in console where this.name will be undefined as the class Person is not having any assignment else it would print the name of person through which this function is called
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

// function bye for class Person when called will print "${this.name.} has left the building. Bye for now" in console where this.name will be undefined as the class Person is not having any assignment else it would print the name of person through which this function is called
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}


// Parth object of class with properties passed 
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);

// HarmanPreet object of class with properties passed 
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


// Class Teacher that is inherited from Person class with two extra variables and accepting 6 variables in constructor i.e. subject and grade and all the variables and functions of Perosn class 
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
	 // super keyword to call the constructor of parent class to fill out all variables inherited from Parent class
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

// Declaring object of teacher class

let myTeacher = new Teacher('TeacherName',20,'male',['Teaching'],'JS','A');