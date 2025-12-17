// Prompt user for gardening season and plant type
let season = prompt("Which season are you gardening in? Summer or winter:").toLowerCase();
let plantType = prompt("What type of plant are you working with? Flower or vegetable:").toLowerCase();

// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
} else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
} else {
    advice += "No advice for this season.\n";
}

// Determine advice based on the plant type
if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
} else {
    advice += "No advice for this type of plant.";
}

// Log the generated advice to the console
console.log(advice);

