let checkWin =false;
let count =1;
function moveCircles() {
    ctx.clearRect(0,0,maxWidth, maxHeight);

    bars.reder();
    circle.x +=circle.vx;
    circle.y += circle.vy;
    circle.drawCircle();
        if (circle.x > maxWidth - circle.radius || circle.x < circle.radius) {
            circle.vx =- circle.vx;
        }
        if (circle.y < circle.radius ) {
            circle.vy =- circle.vy;
        }
        if (  circle.y > maxHeight - circle.radius ) {
            clearInterval(gameOver)

        }
        moveTouchBar();
        document.getElementById("score").innerText = "Point:" + score;
    count++;
    if (count % 500 === 0 && checkWin===false) {
        enemy[enemy.length] = new Enemy(Math.floor(Math.random() * 500), 0, 80, 15, "red")
    }
    for (let i = 0;i<enemy.length;i++){
        enemy[i].y += enemy[i].dy;
        enemy[i].drawEnemy()
    }
    EnemyDied();
}
let gameOver = setInterval(moveCircles,10);
