class Stone {
    construtor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length: 10,
            isStatic: false,
            restitution: 0,
            density: 1.2,
            friction: 1
        }
    this.image = loadImage("Plucking mangoes/stone.png");

    this.mys = pointB;
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
        
    }
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.mys;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}