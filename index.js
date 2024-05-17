// Create an empty object and assign it to a variable.
let myobject={};
console.log(myobject)

// Create an object with properties for name, age, and profession.
let myobject1 =new Object();
myobject1.name='Hassan';
myobject1.age=21;
myobject1.profession='Developer';
console.log(myobject1)


// Access and print the values of properties from an object
let myObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(myObject.name); // Output: John
  console.log(myObject.age);  // Output: 30
  console.log(myObject.city); // Output: New York
  

//   Modify the value of a property in an object.
let objct = {
    name:"John",
    age:21,
    city:"Faisalabad"
};
objct.name="Hassan";
objct.age=22
console.log(objct.name);
console.log(objct.age);

objct["city"]="LosAngles";
console.log(objct["city"]);

// Add a new property to an existing object.
let objct1 = {
    name:"John",
    age:21,
    city:"Faisalabad"
};
objct1.Country = "USA"
console.log(objct1.Country);

objct1["Occouation"]="Engineer";
console.log(objct1["Occouation"]);


let newproperty = "Hobby";
objct1["newproperty"]= "Reading";

console.log(objct1.hobby)
console.log(objct1);

// Create an object method that prints a message to the console.
// Define an object with a method that prints a message to the console
let Object1 = {
  name: "Adil",
  age: "19",
  area: {
      country: "Pakistan",
      city: "Faisalabad"
  }
}
console.log(Object1)
Object1.area.city="Islamabad"
console.log(Object1)

  

//   Create a method that calculates and returns a value based on object properties.
const  rectangle = {
    width:10,
    height:10,
    calaulateArea(){
        return this.width * this.height
    }
};
const area =rectangle.calaulateArea();
console.log("the area of rectangle is :")
  
// Iterate over the properties of an object and print their values./

const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
  };
  
  // Iterate over the properties of the object and print their values
  for (let property in person) {
    if (person.hasOwnProperty(property)) {
      console.log(`${property}: ${person[property]}`);
    }
  }
  // Compare two objects to check if they have the same properties and values.
// Compare two objects to check if they refer to the same object in memory.\
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { name: "Adil", age: 20, profession: "Developer" }
const obj2 = { name: "Adil", age: 20, profession: "Developer" }
const obj3 = { name: "Jane", age: 25, profession: "Designer" }

console.log(compareObjects(obj1, obj2))
console.log(compareObjects(obj1, obj3)) 

// Create an object that contains another object as one of its properties.
// Access and modify properties of a nested object.

let object_1 = {
  name: "Hassan",
  age: "19",
  area: {
      country: "Pakistan",
      city: "Faisalabad"
  }
}
console.log(object_1)
object_1.area.city="Islamabad"
console.log(object_1)

// Create a prototype object and use it to create multiple instances of objects.
// Add a method to the prototype object and observe its effect on the instances.

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
  
  const person_1 = new Person("Hassan", 21);
  const person_2 = new Person("Adil", 19);
  
  person_1.introduce()
  person_2.introduce()   

// Task 8: Object Serialization

// Convert an object to a JSON string using JSON.stringify().
// Parse a JSON string and convert it back to an object using JSON.parse().
const myObject1 = {
    name: "Adil",
    age: 19,
    city: "Faisalabad"
  };
  
  let jsonString = JSON.stringify(myObject);
  
  console.log(jsonString)
  let parsedObject= JSON.parse(jsonString)
  console.log(parsedObject)


  // Convert an object to a JSON string using JSON.stringify().
  const obj ={
    name:"Hassan",
    age:21,
    isStudent:false,
    address:{
      street:"123 Main",
      city:"Neew York",
      Country:"USA",
    }
  };
  const jsonString1 = JSON.stringify(obj);
  console.log(jsonString1);

  // Parse a JSON string and convert it back to an object using JSON.parse().
  // Example JSON string
const jsonString3 = '{"name":"John","age":30,"isStudent":false,"hobbies":["reading","gaming","coding"],"address":{"street":"123 Main St","city":"Anytown","country":"USA"}';
const object2 = JSON.parse(jsonString);
console.log(object2);

console.log(object2.name);      
console.log(object2.age);    
console.log(object2.isStudent);  
console.log(object2.hobbies);    
console.log(object2.address);   

// Use object destructuring to extract specific properties from an object.
// Define a JavaScript object
const person1= {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};
const { firstName, age } = person;
console.log(firstName); 
console.log(age);      

// Use Object.keys() to get an array of all the property names of an object.
// Define a JavaScript object
const object1 = {
  name: 'John',
  age: 30,
  isStudent: false,
  hobbies: ['reading', 'gaming', 'coding'],
  address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
  }
};
const propertyNames = Object.keys(object1);
console.log(propertyNames);
function Parent(name) {
  this.name = name;
}
Parent.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.introduce = function() {
  console.log(`My name is ${this.name} and I am ${this.age} years old.`);
};
const parent = new Parent('John');
const child = new Child('Alice', 10);
parent.greet();
child.greet();
child.introduce();




// Create private properties in an object using closures or symbols

function Parent(name) {
  this.name = name;
}
Parent.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.introduce = function() {
  console.log(`My name is ${this.name} and I am ${this.age} years old.`);
};
const parent1 = new Parent('John');
const child1 = new Child('Alice', 10);
parent.greet();
child.greet();
child.introduce(); 


