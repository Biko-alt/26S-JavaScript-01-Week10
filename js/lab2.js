// LAB 2

//parent class
class Coffee2 {
    //constructor
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    //Method to serve the coffee
    serveIt() {
        output.innerHTML += `Your ${this.size} coffee is ready!<br>`;
    }
}

// Child class
class Mocha extends Coffee2 {
    //constructor
    constructor(size, isDecaf, shots, flavour){
        super(size, isDecaf);
        this.shots = shots;
        this.flavour = flavour;
    }

    //Custom method
    getDescription() {
        const decaftext = this.isDecaf ? "decaf" : "caffeinated";
        return `A ${this.size} ${decaftext} mocha with ${this.shots} shots and ${this.flavour} flavour.`;
    }
}    

// Create objects
const mocha1 = new Mocha("large", false, 2, "Caramel");
const mocha2 = new Mocha("small", true, 1, "Vanilla");

//Display Output

// Object 1
mocha1.serveIt();
output.innerHTML += mocha1.getDescription() + "<br><br>";

// Object 2
mocha2.serveIt();
output.innerHTML += mocha2.getDescription();