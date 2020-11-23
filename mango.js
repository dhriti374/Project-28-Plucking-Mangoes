class Mango{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        //this.body = Bodies.round(x, y, 20);
        this.x = x;
        this.y = y;
        this.image = loadImage("Plucking mangoes/mango.png");
    }
}