let maxWidth = 600;
let maxHeight = 600;
function Circle(x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.vy =1;
    this.vx=1;
    this.radius = radius;
    this.color = color;
    this.drawCircle = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke()
    }
}
 let circle  =new Circle(50,60,11,"grey" );

