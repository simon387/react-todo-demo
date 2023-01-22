let sportsOne: string[] = ["golf", "cricket", "tennis", "swkimming"];

for (let i=0; i< sportsOne.length; i++) {
	console.log(sportsOne[i]);
}

for (let tempSport of sportsOne) {


	if (tempSport === "cricket") {
		console.log(tempSport + " << my fav");
	} else {
		console.log(tempSport)
	}
}