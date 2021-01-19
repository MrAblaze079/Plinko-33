class Rope{
    constructor(bodyA, pointB){

        //JSON - Javascript object notation
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        
        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

     

    display(){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(random(0,255),random(0,255),random(0,255));
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}