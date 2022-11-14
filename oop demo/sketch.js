// Object Oriented Program

class Dog {
  constructor(name){
    this.name = name;
    this.age = 0;
  }

  bark(){
    console.log("Woof! says " + this.name);
  }
}

let myDog = new Dog("Hermione");
let yourDog = new Dog("Max"); 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
