function setupLevel() {
  //Variables. Store your values. You can reuse these value.
  platformWidth = 30;
  platformColor = "black";
  
  //We are using the platformWidth variable to give our platforms a width of 30.
  createPlatform(30, 100, platformWidth, 10, "green");

  //We are using the platformColor variable to give platforms 2,3 and 4, a black color.
  createPlatform(90, 200, platformWidth, 10, platformColor);
  createPlatform(180, 300, platformWidth, 10, platformColor);
  createPlatform(300, 400, platformWidth, 10, platformColor);
}
