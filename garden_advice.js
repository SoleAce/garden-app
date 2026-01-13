// Hardcoded values for the season and plant type
let season = prompt("summer or winter"); // TODO: Replace with prompt() to allow user interaction.
let plantType = "flower"; // TODO: Replace with prompt() to allow user interaction.

// Variable to hold gardening advice
let advice = "";

//Refactor issue-1 to function to determine advice based on the season
function seasonFunction(plantType) {
  const seasonAdvice = {
    winter: "Water your plants regularly and provide some shade.\n",
    summer: "Protect your plants from frost with covers.\n",
  };
  advice += seasonAdvice[plantType] || "No advice for this season.\n";
}

// if (season === "summer") {
//   advice += "Water your plants regularly and provide some shade.\n";
// } else if (season === "winter") {
//   advice += "Protect your plants from frost with covers.\n";
// } else {
//   advice += "No advice for this season.\n";
// }

//issue-2-object-lookups
const plantAdvice = {
  flower: "Use fertiliser to encourage blooms.",
  vegetable: "Keep an eye out for pests!",
};

advice += plantAdvice[plantType] || "No advice for this type of plant.";

// Log the generated advice to the console
console.log(advice);
