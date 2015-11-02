function setupLevel() {
	//Update the color of this VARIABLE to change all of the platform colors
	platformColor = "red";

	//Leave this code alone
	createPlatform(30, 100, 80, 10, "green");
	createPlatform(90, 200, 80, 10, platformColor);
	createPlatform(180, 300, 80, 10, platformColor);
	createPlatform(300, 400, 80, 10, platformColor);
}
