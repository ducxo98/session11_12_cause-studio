let enemy =[];
function Enemy(x,y,widthE,height,color) {
    this.x=x;
    this.y=y;
    this.dy=0.07;
    this.widthE=widthE;
    this.height=height;
    this.color=color;
    this.drawEnemy = function () {
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.widthE,this.height);
        ctx.fill();
        ctx.stroke();
    }
}


