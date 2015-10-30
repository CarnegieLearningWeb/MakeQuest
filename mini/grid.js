function drawGrid() {
    textSize(12);
    fill('black');
    for (var i = 40; i < WIDTH; i += 40) {
        line(0, i, 20, i);
        line(i, 0, i, 20);
    };

    for (var i = 40; i < WIDTH; i += 80) {
        text(i, 20, i);
        text(i, i, 30);
    };
}
