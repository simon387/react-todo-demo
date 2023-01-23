import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./GolfCoach";
import {Coach} from "./Coach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let coaches: Coach[] = [];
coaches.push(cricketCoach);
coaches.push(golfCoach);

for (let c of coaches) {
	console.log(c.getDailyWorkout());
}
