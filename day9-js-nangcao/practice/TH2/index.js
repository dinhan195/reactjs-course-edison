"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceLocation = void 0;
let spacecraftName = 'Determination';
let speedMph = 17500;
let kilomitersToMars = 225000000;
let kilometersToTheMoon = 384400;
let milesPerKilometer = 0.621;
const daysToMars = getDaysToLocation(kilomitersToMars);
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
function getDaysToLocation(kilometersAway) {
    let milesAway = kilometersAway * milesPerKilometer;
    let hours = milesAway / speedMph;
    return hours / 24;
}
class SpaceLocation {
    constructor(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
}
exports.SpaceLocation = SpaceLocation;
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        let milesAway = kilometersAway * this.milesPerKilometer;
        let hours = milesAway / this.speedMph;
        return hours / 24;
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
