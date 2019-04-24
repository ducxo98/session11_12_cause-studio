let score =0;
function touchBar(bar,circle) {
    if(circle.y >= bars.y - circle.radius){
        if(circle.x <bars.x){
            if(circle.x + circle.radius >bars.x){
                return true
            }
        }else if(circle.x > bars.x +bars.width){
            if(circle.x -circle.radius < bars.x + bars.width){
                return true

            }
        }
        if((circle.x >= bars.x) && (circle.x <= bars.x + bars.width)){
            return true

        }
    }
    return false
}
function moveTouchBar() {
    if(touchBar(bars,circle)){
        score++;
        circle.vy =- circle.vy;
    }
}