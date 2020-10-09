class Bob {
    constructor(x, y) {
      var options = {
        
        'isStatic' : false,
        'restitution': 1.0,
        'density':0.8
      }
      
      
      this.diameter = 50
      
 
      this.body = Matter.Bodies.circle(x, y, this.diameter/2, options);
      

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
     // var angle = this.body.angle;
    push();
      translate(pos.x, pos.y);
     
     
      fill("red");
      ellipse(0, 0, 50,50);
     
     pop();
    }
  };
 
  