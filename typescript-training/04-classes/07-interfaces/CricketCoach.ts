import {Coach} from "./Coach";

export class CricketCoach implements Coach {
	public getDailyWorkout(): string {
		return "Practice your spin bowling technique.";
	}
}