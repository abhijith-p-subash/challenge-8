// Park Town sub class
class parkAndTown {
    constructor(noTrees, area, streetLength) {
        this.noTrees = noTrees;
        this.area = area;
        this.streetLength = streetLength;
    }
    treeDensity() {
        return this.density = (this.noTrees / this.area);
    }
    calcParkAge() {
        return this.parkAge = new Date().getFullYear() - this.buildYear
    }
}

//
class townElement extends parkAndTown {
    constructor(name, buildYear, noTrees, area = "small", streetLength) {
        super(noTrees, area, streetLength);
        this.name = name;
        this.buildYear = buildYear;
    }
}



//
var park_1 = new townElement("PARK-1", 1997, 2500, 100, 0);
var park_2 = new townElement("PARK-2", 1987, 1000, 250, 0);
var park_3 = new townElement("PARK-1", 2000, 800, 180, 0);

var street_1 = new townElement("STREET-1", 2001, 0, "Big", 5);
var street_2 = new townElement("STREET-2", 1999, 0, "Small", 2);
var street_3 = new townElement("STREET-3", 1899, 0, "Normal",);
var street_4 = new townElement("STREET-1", 1995, 0, "Huge", 8);

var allParks = new Map();
allParks.set("PARK-1", park_1);
allParks.set("PARK-2", park_2);
allParks.set("PARK-3", park_3);

var allStreets = new Map();
allStreets.set("STREET-1", street_1);
allStreets.set("STREET-2", street_2);
allStreets.set("STREET-3", street_3);
allStreets.set("STREET-4", street_4);



var parksData = () => {
    var sum = 0
    for (let [key, value] of allParks.entries()) {
        //  console.log(value.treeDensity());
        console.log(`The Tree density of ${key} is ${value.treeDensity()}`);
        sum = sum + value.calcParkAge();
    }

    var avaParkAge = sum / allParks.size;
    console.log(`Average Age of the Town's Park is ${avaParkAge}`);

    console.log("The name of the park that has more than 1000 trees");
    for (let [key, value] of allParks.entries()) {
        if (value.noTrees >= 1000) {
            console.log(`${key} has ${value.noTrees} Trees`);
        }
    }
}

var streetsData = () => {
    var sum = 0;
    var i = 0;
    for (let [key, value] of allStreets.entries()) {
        //console.log(value.streetLength);
        if (typeof (value.streetLength) === "number") {
            sum = sum + value.streetLength
            i++
        }

        console.log(`${key} is a ${value.area} Street`);       
    }
    var avaLength = sum / i;
    console.log(`Total Length of the Town's Streets = ${sum} Km`);
    console.log(`Average Length of the Town's streets = ${avaLength} Km`);
}


parksData()
streetsData();






