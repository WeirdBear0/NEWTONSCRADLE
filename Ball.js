class Ball{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.width = width;
        this.height = height;
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(400,500,100,100);
      }
    }
