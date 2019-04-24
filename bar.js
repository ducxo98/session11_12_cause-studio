let ctx =document.getElementById("myCanvas").getContext("2d");
function Bars(x, y, width, height, color) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.color=color;
    this.speed=20;
    this.reder =function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fill();
        ctx.stroke()
    }
}
let bars = new Bars(200,500,200,25,"blue");

function moveSelection(evt) {
    switch (evt.keyCode) {


        case 37:
            if (0 <bars.x) {
                bars.x -= bars.speed
            }
            break;

        case 39:
            if (bars.x < 400){
                bars.x += bars.speed;
            }
            break;
    }
}
window.addEventListener('keydown',moveSelection);
