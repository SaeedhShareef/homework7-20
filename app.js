// begin Falsy Bouncer
function bouncer(arr) {
    var newArray = [];
    newArray = arr.filter(noMoreFalsy);
  
    return newArray;
  }
  function noMoreFalsy(value){
      return Boolean(value);
  }
  
  bouncer([7, "ate", "", false, 9]);
// end Falsy bouncer

// begin Chunky Monkey
function chunkArrayInGroups(arr, size) {
    var chunky = [];
    while (arr.length > 0) {
       chunky.push(arr.splice(0,size));
    }
    arr = arr.slice(size);
  return chunky;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// end chunky Monkey
// start object oriented programming
let dog = {
    name: "Doggo",
    numLegs: 5
};
// end object oriented programming
// start using dot notation
let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name)
  
  console.log(dog.numLegs)
//   end dot notation
// start method on an object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { return "This dog has 4 legs."}
  
  };
  
  dog.sayLegs();
// end method on an object
// start this keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();
// end this keyword
// start constructor
function Dog() {
    this.name = "Doggo";
    this.color ="Purple";
    this.numLegs = 5000
  }
    // end constructor
    // start new
    function Dog() {
        this.name = "Rupert";
        this.color = "brown";
        this.numLegs = 4;
      }
      // Only change code below this line
      let hound = new Dog
    //   end new
    // start constructor with arguments
    function Dog(name,color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
        }
        
        let terrier = new Dog("Doggo","pink")
        // end constructors with Arguments
        // start instanceof
        function House(numBedrooms) {
            this.numBedrooms = numBedrooms;
          }
          
          // Only change code below this line
          let myHouse = new House (4)
          
          myHouse instanceof House
        //   end instanceof
        // start own properties
        function Bird(name) {
            this.name = name;
            this.numLegs = 2;
          }
          
          let canary = new Bird("Tweety");
          let ownProps = [];
          // Only change code below this line
          for (let property in canary){
            if(canary.hasOwnProperty(property))
            ownProps.push(property);
          }
        //   end own properties
        // start properties
        function Dog(name) {
            this.name = name;
          }
          
          Dog.prototype.numLegs = 4
          
          // Only change code above this line
          let beagle = new Dog("Snoopy");
        // end properties        //   
        