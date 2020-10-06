class Bob {
    constructor(x, y) {
      var options = {
        
        'isStatic' : true,
        'restitution':0.3,
          'friction':0.1,
          'density':1.2
      }
      
      
      this.diameter = 50
      
 
      this.body = Matter.Bodies.circle(x, y, this.diameter, options);
      

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
     // var angle = this.body.angle;
    push();
      translate(pos.x, pos.y);
     
     
      fill("red");
      ellipse(pos.x, pos.y , 50,50);
     
     pop();
    }
  };
 
  