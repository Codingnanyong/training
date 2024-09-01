// Old
function Vaction(destination, length){
    this.destination = destination;
    this.length = length;
}

Vaction.prototype.print =  function(){
    console.log(`${this.destination} is ${this.length} days`);
}

const maui = new Vaction("My",7);
maui.print(); // My is 7 days.

// New 
class Vaction1 {
    constructor(destination,length){
        this.destination = destination;
        this.length = length;
    }
    print(){
        console.log(`${this.destination} is ${this.length} days`);
    }
}

const trip = new Vaction1("Korea",7);
trip.print(); // Korea is 7days.

class Expedtion extends Vaction1{
    constructor(destination,length,gear){
        super(destination,length);
        this.gear = gear;
    } 
    print(){
        super.print();
        console.log(`${this.gear.join("and")}`);
    }
}

const trip2 = new Expedtion ("Home",3,["Sunglass","Flag","Camera"]);

trip2.print();