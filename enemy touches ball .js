function EnemyDied() {
    for (let i = 0; i < enemy.length; i++) {
        if (enemy[i].y + enemy[i].height + circle.radius < circle.y) {
            if (circle.vy < 0) {
                if (enemy[i].y + enemy[i].height + circle.radius - circle.vy >= circle.y) {
                    if (enemy[i].x <= circle.x && circle.x <= enemy[i].x + enemy[i].widthE) {
                        score++;
                        circle.vy = -circle.vy;
                        enemy.splice(enemy.indexOf(enemy[i]), 1)

                    }

                }
            }
        }
        if (circle.y + circle.radius < enemy[i].y){
            if (circle.vy >0){
                if (circle.y + circle.radius + circle.vy >= enemy[i].y ){
                    if (enemy[i].x <= circle.x && circle.x <= enemy[i].x + enemy[i].widthE){
                        score++;
                        circle.vy =- circle.vy;
                        enemy.splice(enemy.indexOf(enemy[i]), 1);

                    }
                }
            }
        }
        if (circle.x + circle.radius <= enemy[i].x){
            if(circle.vy < 0) {
                if (enemy[i].y <= circle.y && circle.y <= enemy[i].y + enemy[i].height) {
                    if (circle.x + circle.radius >= enemy[i].x) {
                        score++;
                        circle.vy =- circle.vy;
                        enemy.splice(enemy.indexOf(enemy[i]), 1);


                    }
                }
            }else if (circle.vy > 0){
                if (enemy[i].y <= circle.y && circle.y <= enemy[i].y + enemy[i].height){
                    if (circle.x + circle.radius >= enemy[i].x){
                        score++;
                        circle.vy =- circle.vy;
                        enemy.splice(enemy.indexOf(enemy[i]), 1);

                    }

                }

            }
        }
        if (circle.x + circle.radius >= enemy[i].x + enemy[i].widthE){
            if (circle.vy < 0){
                if (enemy[i].y <= circle.y && circle.y <= enemy[i].y + enemy[i].height ) {
                    if (circle.x <= enemy[i].x + enemy[i].widthE  + circle.radius) {
                        circle.vx =- circle.vx;
                        enemy.splice(enemy.indexOf(enemy[i]), 1);

                    }
                }
            }else if (circle.vy > 0){
                if (enemy[i].y <= circle.y && circle.y <= enemy[i].y + enemy[i].height){
                    if (circle.x <= enemy[i].x + enemy[i].widthE + circle.radius) {
                        circle.vy =- circle.vy;
                        enemy.splice(enemy.indexOf(enemy[i]), 1);

                    }
                }
            }
        }
        if (enemy[i].y + enemy[i].height >= maxHeight){
            clearInterval(gameOver)
        }

    }

}
