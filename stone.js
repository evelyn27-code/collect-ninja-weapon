class stone{
    constructor(x,y,r){
    var options= {
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    
    }
    
   
    this.x = x;
    this.y=y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);

    World.add(world,this.body);
    this.image = loadImage("nunchaju 1.jpg"); 
}

  
   display() {
    var pos = this.body.position;
   
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    
   ellipse(0,0,this.r,this.r);
   imageMode(CENTER);
image(this.image, 0, 0, 73, 73);
   pop()
  
    
           
   }
}