// Prompt user for gardening season and plant type
let season = prompt("Which season are you gardening in? Summer or winter:").toLowerCase();
let plantType = prompt("What type of plant are you working with? Flower or vegetable:").toLowerCase();

// Variable to hold gardening advice
let advice = "";

// Determine advice based on the plant type
   const adviceLog = {

     flower: {
         summer: "Water your plants regularly and provide some shade. Use fertiliser to encourage blooms.\n",
         winter: "Protect your plants from frost with covers. Use fertiliser to encourage blooms.\n"
     },

     vegetable: {
         summer: "Water your plants regularly and provide some shade. Keep an eye out for pests aswell!\n",
         winter: "Protect your plants from frost with covers. Keep an eye out for pests aswell!\n"
     }
};

// Determine advice based on the season and plant type 
 if (adviceLog[plantType] && adviceLog[plantType][season]) { // if (plantType in adviceLog && season in adviceLog[plantType])
     advice += adviceLog[plantType][season];
  }
       else {
         advice += "No advice for this type of plant.";
        }

// Log the generated advice to the console
console.log(advice);