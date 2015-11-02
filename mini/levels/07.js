function setupLevel(){

  //Update the values of these VARIABLES to change the position and size of your platforms.
  platformColor = "red";
  platformWidth = 40;
  platformHeight = 10;

  //Leave this code alone
  createPlatform(90, 200, platformWidth, platformHeight, "green");
  createPlatform(190, 300, platformWidth, platformHeight, platformColor);
  createPlatform(290, 400, platformWidth, platformHeight, platformColor);
  createPlatform(390, 500, platformWidth, platformHeight, platformColor);

}
