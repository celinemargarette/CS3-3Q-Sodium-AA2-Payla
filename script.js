function respondToClick() {
    let initialPopulation = parseFloat(prompt("Enter the number of initial population:"));
    let rateOfGrowth = parseFloat(prompt("Enter the rate of growth:"));
    let timeInHours = parseFloat(prompt("Enter time in hours:"));

    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.E, rateOfGrowth * timeInHours));

    let locationOfMonster = prompt("Enter the location:");
    let nameOfMonster = prompt("Enter the name:");

    
    let nameAndLocationOfMonster = locationOfMonster.concat(" ", nameOfMonster).toUpperCase();

    
    document.getElementById("result").innerHTML = "After " + timeInHours + " hours, the population of " + nameAndLocationOfMonster + " has risen to " + finalPopulation + ".";
}