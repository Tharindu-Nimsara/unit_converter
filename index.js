// index.js
const conversionData = {
    volume: {
        title: "Convert Volume",
        units: { Liters: 1, Milliliters: 1000, "Cubic Meters": 0.001 }
    },
    length: {
        title: "Convert Length",
        units: { Meters: 1, Centimeters: 100, Kilometers: 0.001 }
    },
    mass: {
        title: "Convert Mass",
        units: { Kilograms: 1, Grams: 1000, Pounds: 2.20462 }
    },
    temperature: {
        title: "Convert Temperature",
        units: { Celsius: "C", Fahrenheit: "F", Kelvin: "K" }
    },
    speed: {
        title: "Convert Speed",
        units: { "Meters per second": 1, "Kilometers per hour": 3.6, "Miles per hour": 2.23694 }
    },
    pressure: {
        title: "Convert Pressure",
        units: { Pascal: 1, Bar: 0.00001, Atmosphere: 0.000009869 }
    }
};

function setConversionType(type) {
    document.getElementById("conversionTitle").innerText = conversionData[type].title;
    updateUnitOptions(conversionData[type].units);
}

function updateUnitOptions(units) {
    let fromUnitSelect = document.getElementById("fromUnit");
    let toUnitSelect = document.getElementById("toUnit");
    fromUnitSelect.innerHTML = "";
    toUnitSelect.innerHTML = "";
    for (let unit in units) {
        fromUnitSelect.innerHTML += `<option value="${units[unit]}">${unit}</option>`;
        toUnitSelect.innerHTML += `<option value="${units[unit]}">${unit}</option>`;
    }
}

function convert() {
    let fromValue = parseFloat(document.getElementById("fromValue").value);
    let fromUnit = parseFloat(document.getElementById("fromUnit").value);
    let toUnit = parseFloat(document.getElementById("toUnit").value);
    let result = (fromValue * fromUnit) / toUnit;
    document.getElementById("toValue").value = result;
}

// Set default conversion type
setConversionType('volume');
