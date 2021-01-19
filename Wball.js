class Wball {
    constructor(x, y, radius) {
      var options = {
          'frictionAir':0.005,    
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
  
      World.add(world, this.body);
    }
    display(){
      var paperpos = this.body.position;
      push();
      ellipseMode(RADIUS);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(paperpos.x, paperpos.y, this.radius, this.radius);
      pop();
    }
  }