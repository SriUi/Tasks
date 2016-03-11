var vData = getVehiclesData();
//Get Vehicles data from object vehiclesData array
function getVehiclesData(){
var vehiclesData = [{year: 2014, make: "Audi", model: "A4"},
					{year: 2015, make: "Benz", model: "c03"},
					{year: 2015, make: "Benz", model: "csx"},
					{year: 2015, make: "Benz", model: "Bond007"},
					{year: 2015, make: "Benz", model: "Bond007"},
					{year: 2015, make: "Benz", model: "Bond007"},
					{year: 2014, make: "Benz", model: "Bond005"},
					{year: 2014, make: "Toyota", model: "t05"},
					{year: 2015, make: "Maruthi", model: "A22"},
					{year: 2014, make: "Jaguar", model: "T11"},
					{year: 2016, make: "Honda", model: "H21"}
					];
return vehiclesData;
}

function displayYearOfVehicle() {
    var dropdown1 = document.getElementById("yearDropdown");
    var allYearsArray = getAllValueOfOneAttribute(vData, 'year');
    var uniqueYearsArray = getUniqueStringsArray(allYearsArray);

    for (var i = 0; i < uniqueYearsArray.length; i++) {
        var option1 = document.createElement("option");
        option1.text = uniqueYearsArray[i];
        option1.value = uniqueYearsArray[i];
        dropdown1.appendChild(option1);
    }
}

function getAllValueOfOneAttribute(vData, vehicle_one_attribute) {
    var allValueOfOneAttribute = [];
    var aVehicle;

    for (var i = vData.length - 1; i >= 0; i--) {
        aVehicle = vData[i];
        if (vehicle_one_attribute == 'year') {
            allValueOfOneAttribute.push(aVehicle.year);
        } else if (vehicle_one_attribute == 'make') {
            allValueOfOneAttribute.push(aVehicle.make);
        } else if (vehicle_one_attribute == 'model') {
            allValueOfOneAttribute.push(aVehicle.model);
        }
    }
    console.log('allValueOfOneAttribute=' + allValueOfOneAttribute);
    return allValueOfOneAttribute;
}


function getUniqueStringsArray(aStringArray) {
    var uniqueStringsArray = [];
    for (var i = aStringArray.length - 1; i >= 0; i--) {
        var temp = aStringArray[i];
        var itemExists = isItemExistInArray(temp, uniqueStringsArray);
        if (!itemExists) {
            uniqueStringsArray.push(temp);
        }
    }
    return uniqueStringsArray;
}

function isItemExistInArray(aItem, aArray) {
    for (var i = aArray.length - 1; i >= 0; i--) {
        if (aArray[i] == aItem) {
            return true;
        } 
        
    };
    return false;
}

displayYearOfVehicle();

function changeYear() {
    //get the selected year
    console.log("Item Selected=" + document.getElementById('yearDropdown')
        .value);

    var selectedYear = document.getElementById('yearDropdown')
        .value;
    var vehicleMakeForSelectedYear = getVehicleMakeForSelectedYear(selectedYear);
    displayDropdownForVehicleMake(vehicleMakeForSelectedYear);
}

function displayDropdownForVehicleMake(vehicleMakeForSelectedYear) {
    //create select element for vehicle make
    var makeDiv = document.getElementById("makeDiv");
    makeDiv.innerHTML = "";


    var makeLabel = document.createElement("label");
    makeLabel.innerHTML = "Vehicle Make: ";
    makeDiv.appendChild(makeLabel);

    var selectMake = document.createElement("select");
    selectMake.id = "makeDropdown";
    selectMake.onchange = changeMake;



    for (var i = 0; i < vehicleMakeForSelectedYear.length; i++) {
        var option1 = document.createElement("option");
        option1.text = vehicleMakeForSelectedYear[i];
        option1.value = vehicleMakeForSelectedYear[i];
        selectMake.appendChild(option1);
    }
    makeDiv.appendChild(selectMake);
}

function changeMake() {
    var selectedYear = document.getElementById('yearDropdown')
        .value;
    var selectedMake = document.getElementById('makeDropdown')
        .value;
    console.log("Make changed for selectedYear " + selectedYear + "  selectedMake: " + selectedMake);


    //get model for selected make and year
    var vehicleModelForSelectedYearAndMake = getVehicleModelForSelectedMakeAndYear(selectedYear, selectedMake);

    displayDropdownForVehicleModel(vehicleModelForSelectedYearAndMake);
    //then display model for selected year and make
}

function displayDropdownForVehicleModel(vehicleModelForSelectedYearAndMake) {
    console.log("displayModel" + vehicleModelForSelectedYearAndMake);
    var modelDiv = document.getElementById("modelDiv");
    modelDiv.innerHTML = "";

    var modelLabel = document.createElement("label");
    modelLabel.innerHTML = "Vehicle Model: ";
    modelDiv.appendChild(modelLabel);

    var selectModel = document.createElement("select");
    selectModel.id = "modelDropdown";
    for (var i = 0; i < vehicleModelForSelectedYearAndMake.length; i++) {
        var option1 = document.createElement("option");
        option1.text = vehicleModelForSelectedYearAndMake[i];
        option1.value = vehicleModelForSelectedYearAndMake[i];
        selectModel.appendChild(option1);
    }
    modelDiv.appendChild(selectModel);
}


function getVehicleModelForSelectedMakeAndYear(selectedYear, selectedMake) {
    var vehicleModelForSelectedYearAndMake = [];
    for (var i = vData.length - 1; i >= 0; i--) {
        if ((selectedYear == vData[i].year) && (selectedMake == vData[i].make)) {
            vehicleModelForSelectedYearAndMake.push(vData[i].model);
        }
    };
    var uniqueModelValues = getUniqueStringsArray(vehicleModelForSelectedYearAndMake);
    return uniqueModelValues;
}

function getVehicleMakeForSelectedYear(selectedYear) {
    var vehicleMakeForSelectedYear = [];
    var aVehicle;
    for (var i = vData.length - 1; i >= 0; i--) {
        aVehicle = vData[i];
        if (selectedYear == aVehicle.year) {
            vehicleMakeForSelectedYear.push(aVehicle.make);
        }
    }
    var uniqueMakeArray = getUniqueStringsArray(vehicleMakeForSelectedYear);
    console.log('unique aVehicle make=' + uniqueMakeArray);

    return uniqueMakeArray;
}

//filter make by year
//var makePerYear=
function getYearUniqueMakeArray(aMakeArray) {
    var aYearMakeArray = [];
    for (var i = aMakeArray.length - 1; i >= 0; i--) {
        var temp = aMakeArray[i];
        var itemExists = isItemExistInArray(temp, aYearMakeArray);
        if (!itemExists) {
            aYearMakeArray.push(temp);
        }
    };
    return aYearMakeArray;
}